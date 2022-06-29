import { Container } from 'inversify';
import { ConfigModule } from './config';

const capaContainer = new Container();
capaContainer.load(ConfigModule);

export { capaContainer };