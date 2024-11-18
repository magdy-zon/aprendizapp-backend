import {inject, injectable} from 'inversify';
import mongoose from 'mongoose';
import { 
  BASETYPES, 
  EnumEnvironments, 
  IBaseLogger, 
  IMongoEnvironment 
} from '@clean/core';


@injectable()
export class MongoConfig {
  constructor(
    @inject(BASETYPES.Log) private _log: IBaseLogger,
    @inject(BASETYPES.IMongoConfig) private _config: IMongoEnvironment
  ) {}

  public async initConnection(): Promise<typeof mongoose> {
    const { dbUser, dbPass, dbName: _dbName, dbUrl } = this._config;
    try {
      let dbName = _dbName;
      if (process.env.NODE_ENV.toLowerCase() === 'test')
        dbName += Math.round(Math.random() * 100);

      let conn: typeof mongoose;
      if (dbUser && dbPass && dbName) {
        conn = await mongoose.connect(dbUrl, {
          connectTimeoutMS: 15000,
          socketTimeoutMS: 10000,
          maxPoolSize: 10,
          user: dbUser,
          pass: dbPass,
          dbName,
          useNewUrlParser: true,
          useUnifiedTopology: true
        });
        this._log.info(
          `the database connection to ${dbUrl} ${dbName} has been successfully`
        );
      } else {
        conn = await mongoose.connect(dbUrl, {
          connectTimeoutMS: 15000,
          socketTimeoutMS: 10000,
          maxPoolSize: 10,
          dbName,
          useNewUrlParser: true,
          useUnifiedTopology: true
        });
        this._log.info(
          `the database connection to ${dbUrl} ${dbName} has been successfully`
        );
      }
      if (process.env.NODE_ENV === EnumEnvironments.DEV) {
        await this.setDebugMode(true);
      }
      return conn;
    } catch (error) {
      this._log.error(error);
      return process.exit(1);
    }
  }

  public setAutoReconnect() {
    mongoose.connection.on('disconnected', () => {
      this.initConnection();
    });
  }

  public setEvents() {
    mongoose.connection.on('connected', () => {
      this._log.info(
        `Mongoose default connection is open to ${this._config.dbUrl}`
      );
    });

    mongoose.connection.on('error', (err) => {
      this._log.info(`Mongoose default connection has occured ${err} error`);
    });

    mongoose.connection.on('disconnected', () => {
      this._log.info('Mongoose default connection is disconnected');
    });

    process.on('SIGINT', () => {
      mongoose.connection.close(() => {
        this._log.info(
          'Mongoose default connection is disconnected due to application termination'
        );
        process.exit(0);
      });
    });
  }

  public async disconnect() {
    await mongoose.connection.close();
  }

  public async dropDb() {
    await mongoose.connection.dropDatabase();
  }

  public async setDebugMode(active: boolean) {
    await mongoose.set('debug', active);
  }
}