import { inject } from 'inversify';
import { BaseHttpController, httpPost, requestBody } from 'inversify-express-utils';
import { checkSchema } from 'express-validator';


import { BaseUseCaseUser, IParamsUserEntity } from '@clean/core';
export class BaseUserController extends BaseHttpController {
  @inject('BaseUseCaseUser') private ucUser: BaseUseCaseUser;

  constructor() {
    super();
  }

  @httpPost('
    /user',
    ...checkSchema()
  )
  public async createUser(
    @requestBody() user: IParamsUserEntity  
  ) {
    await this.ucUser.createUser(user);

    return {
      response: {},
      message: 'User created succesfully!.',
      details: '',
    };
  }
} 