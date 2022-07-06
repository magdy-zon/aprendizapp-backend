import { Container } from 'inversify';
import { ConfigModule, DataModule } from './config';

const capaContainer = new Container();
capaContainer.load(ConfigModule);
capaContainer.load(DataModule);

export { capaContainer };