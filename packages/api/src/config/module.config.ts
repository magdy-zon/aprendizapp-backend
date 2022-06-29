import { ContainerModule, interfaces } from 'inversify';
import { MongoConfig } from '@clean/data';
import { EnvAprendizapp } from './environment';
import { BASETYPES, IMongoEnvironment } from '@clean/core';


export const ConfigModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<EnvAprendizapp>(EnvAprendizapp).toSelf().inSingletonScope();
  bind<IMongoEnvironment>(BASETYPES.IMongoConfig).toDynamicValue(
    (context) => context.container.get<EnvAprendizapp>(EnvAprendizapp).mongo
  );

  bind<MongoConfig>(MongoConfig).toSelf().inSingletonScope();
});