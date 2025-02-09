import { BaseUseCaseBlock } from "@clean/core";
import { inject } from "inversify";
import { BaseHttpController, httpGet } from "inversify-express-utils";

export class BaseBlockController extends BaseHttpController {
  @inject('BaseUseCaseBlock') private ucBlock: BaseUseCaseBlock;

  constructor() {
    super();
  }

  @httpGet('/blocks')
  public async getBlocks() {
    const response = await this.ucBlock.allBlocks();

    return { response };
  }
}