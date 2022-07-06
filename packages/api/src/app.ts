import 'reflect-metadata';
import express, { Application } from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Server } from 'http';
import * as morgan from 'morgan';
import chalk from 'chalk';
import { DateTime } from 'luxon';

import { BASETYPES, IBaseLogger } from '@clean/core';
import { MongoConfig } from '@clean/data';
import { capaContainer } from './inversify.config';
import { CorsConfig, EnvAprendizapp, MyStream } from './config';


export class ServerApp {
  private blue = chalk.bold.blue;
  private yellow = chalk.yellow;
  private grey = chalk.bold.grey;
  private log: IBaseLogger = capaContainer.get<IBaseLogger>(BASETYPES.Log);
  private cors: CorsConfig = capaContainer.get<CorsConfig>(CorsConfig);
  private myStream: MyStream = capaContainer.get<MyStream>(MyStream);
  public mongo: MongoConfig;

  private _initialConfig(app: Application): void {
    app.use(express.json());
  }
  private _corsConfig(app: Application): void {
    this.log.info('init cors config');
    app.use(this.cors.initCors());
  }
  private async _mongoConfig(): Promise<void> {
    const mongo: MongoConfig = capaContainer.get<MongoConfig>(MongoConfig);
    this.mongo = mongo;
    await mongo.initConnection();
    mongo.setAutoReconnect();
    mongo.setEvents();
  }
  private async _logConfig(app: express.Application): Promise<void> {
    app.use(
      morgan.default(
        (tokens, req, res) => {
          const argumentsInBody = JSON.stringify(req.body, null, 4);
          return [
            this.blue('---------------------------------------------------\n'),
            this.yellow(DateTime.now().toISO()),
            this.grey(tokens.method(req, res)),
            this.grey(tokens.url(req, res)),
            '\n',
            `Arguments in body: ${argumentsInBody}\n`,
            `Arguments in query: ${JSON.stringify(req.query, null, 4)}\n`,
          ].join(' ');
        },
        { immediate: true, stream: this.myStream }
      )
    );
  }


  public async listen(): Promise<Server> {
    await this._mongoConfig();
    const env: EnvAprendizapp = capaContainer.get<EnvAprendizapp>(EnvAprendizapp);
  
    const inversifyServer = new InversifyExpressServer(capaContainer);
    inversifyServer
      .setConfig(async (app: Application) => {
        this._initialConfig(app);
        this._corsConfig(app);
        await this._logConfig(app);
      });
    const serverInstance = inversifyServer.build();
    return serverInstance.listen(env.port, () => {
      
      this.log.info(chalk.yellow(`Server listening on port ${env.port}`));
    });
  }
}