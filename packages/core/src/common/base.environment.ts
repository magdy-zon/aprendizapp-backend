export enum EnumEnvironments {
  DEV = 'DEVELOPMENT',
  LOCAL = 'LOCAL',
  STAGING = 'STAGING',
  DEMO = 'DEMO',
  PROD = 'PRODUCTION',
  TEST = 'TEST',
}

export interface IMongoEnvironment {
  dbUser: string;
  dbPass: string;
  dbUrl: string;
  dbName: string;
}