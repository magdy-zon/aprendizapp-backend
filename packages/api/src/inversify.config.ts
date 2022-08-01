import { Container } from 'inversify';
import { COMMON, ConfigModule, DataModule } from './config';
import { MiddlewareParameters } from './modules';

const capaContainer = new Container();
capaContainer.load(ConfigModule);
capaContainer.load(DataModule);

capaContainer
  .bind<MiddlewareParameters>(COMMON.midParameters)
  .to(MiddlewareParameters);
export { capaContainer };