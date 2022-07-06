import { ContainerModule, interfaces } from 'inversify';
import { MongoConfig } from '@clean/data';
import { BASETYPES, IBaseLogger, IMongoEnvironment } from '@clean/core';
import { CorsConfig, EnvAprendizapp, Log, MyStream } from '.';


export const ConfigModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<EnvAprendizapp>(EnvAprendizapp).toSelf().inSingletonScope();
  
  bind<IMongoEnvironment>(BASETYPES.IMongoConfig).toDynamicValue(
    (context) => context.container.get<EnvAprendizapp>(EnvAprendizapp).mongo
  );
  bind<MongoConfig>(MongoConfig).toSelf().inSingletonScope();
  
  bind<Log>(Log).toSelf().inSingletonScope();
  
  bind<IBaseLogger>(BASETYPES.Log).to(Log).inSingletonScope();

  bind<CorsConfig>(CorsConfig).toSelf().inSingletonScope();

  bind<MyStream>(MyStream).toSelf().inSingletonScope();
});