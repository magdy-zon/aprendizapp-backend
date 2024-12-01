import { BaseUseCaseUser } from "@clean/core";
import { inject } from "inversify";
import { BaseHttpController, httpPost, requestBody } from "inversify-express-utils";

export class BaseUserController extends BaseHttpController {
  @inject('BaseUseCaseUser') private ucUser: BaseUseCaseUser;

  constructor() {
    super();
  }

  @httpPost('/user')
  public async createUser(
    @requestBody() user
  ) {
    const response = await this.ucUser.createUser(user);

    return {response};
  }
} 