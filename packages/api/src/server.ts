import { ServerApp } from './app';

const server = new ServerApp();

try {
  server.listen();
  
} catch (error) {
  console.log(error);
}
