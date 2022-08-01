import { IBndActivityRead } from "@clean/core";
import { injectable } from "inversify";
import { IModelActivity, IModelBlock, ModelActivity, ModelBlock } from "../../models";

@injectable()
export class ImplBndActivityRead implements IBndActivityRead {
  public async allActivities(blockId: string) {
    try {
      const block: IModelBlock = await ModelBlock.findById(blockId);
      if(!block) return null;

      const activities: IModelActivity[] = await ModelActivity.find({
        block: blockId
      }, {block: 0}).populate('block');

      return {
        block: {
          name: block.name,
          _id: block.id
        },
        activities
      }
    } catch (error) {
      throw console.log(error);
    }
  }
}