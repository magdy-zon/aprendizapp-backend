import { injectable } from 'inversify';
import {
  IMongoEnvironment
} from '@clean/core';

@injectable()
export class EnvAprendizapp {
  private _mongo: IMongoEnvironment;
  private _port: number;

  constructor() {
    this._mongo = this.setMongo();
    this._port = this.setPort();
  }

  private setMongo(): IMongoEnvironment {
    return {
      dbName: process.env.DBNAME,
      dbUser: process.env.DBUSER,
      dbPass: process.env.DBPASS,
      dbUrl: process.env.DBURL,
    } as IMongoEnvironment;
  }
  private setPort(): number {
    return parseInt(process.env.PORT, 0);
  }

  public get mongo(): IMongoEnvironment {
    return this._mongo;
  }
  public get port(): number {
    return this._port;
  }
}