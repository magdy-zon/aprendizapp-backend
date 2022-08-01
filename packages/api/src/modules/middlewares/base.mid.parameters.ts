import { injectable } from "inversify";
import { BaseMiddleware } from "inversify-express-utils";
import { validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';

@injectable()
export class MiddlewareParameters extends BaseMiddleware {
  constructor() {
    super();
  }

  public handler(req: Request, res: Response, next: NextFunction) {
    const paramErrors = validationResult(req);
    if (!paramErrors.isEmpty()) {
      const response = {
        response: {},
        message: '',
        details: '400 - Bad Request: ',
      };
      const messages = [];
      const params = [];
      const errors = paramErrors.mapped();
      Object.values(errors).forEach((item) => {
        messages.push(item['msg']);
        params.push(item['param']);
      });
      response.message = messages.join(', ');
      response.details = params.join(', ');
      console.log(response) 
    } 
    return next();
  }
}

