import { RequestHandler } from 'express';
import { injectable } from 'inversify';
import cors from 'cors';

@injectable()
export class CorsConfig {
  public initCors(): RequestHandler[] {
    const corsOptions = {
      origin: async (origin, callback) => {
        return callback(null, true);
      },
    };
    return [cors({ credentials: true, ...corsOptions })];
  }
}
