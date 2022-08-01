import { injectable } from "inversify";
import { IBndBlockRead } from "@clean/core";
import { IModelBlock, ModelBlock } from "../../models";

@injectable()
export class ImplBndBlockRead implements IBndBlockRead {
  public async getBlocks() {
    try {
      const blocks: IModelBlock[] = await ModelBlock.find();
      if(!blocks) return null;

      return blocks
    } catch (error) {
      throw console.log(error)
    }
  }
}