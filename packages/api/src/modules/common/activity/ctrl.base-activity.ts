import { BaseUseCaseActivity } from "@clean/core";
import { inject } from "inversify";
import { BaseHttpController, httpGet, requestParam } from "inversify-express-utils";

export class BaseActivityController extends BaseHttpController {
  @inject('BaseUseCaseActivity') private ucActivity: BaseUseCaseActivity;

  constructor() {
    super();
  }

  @httpGet('/activities/:blockId')
  public async getActivities(
    @requestParam('blockId') blockId: string,
  ) {
    const response = await this.ucActivity.allActivities(blockId);

    return { response };
  }
}