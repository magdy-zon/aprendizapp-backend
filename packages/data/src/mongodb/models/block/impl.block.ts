import { Schema, model, Model } from 'mongoose';
import { IModelBlock } from '.';


class SchemaBlock extends Schema {
  constructor() {
    super({
      name: {
        type: String,
        required: true
      },
    })
  }
}

const schemaBlock = new SchemaBlock();
export const ModelBlock: Model<IModelBlock> =
  model<IModelBlock>('Block', schemaBlock);