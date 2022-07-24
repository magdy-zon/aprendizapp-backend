import { Schema, model, Model } from 'mongoose';
import { IModelActivity } from '.';

class SchemaActivity extends Schema {
  constructor() {
    super({
      name: {
        type: String,
        required: false
      },
      block: {
        type: Schema.Types.ObjectId,
        required: false,
        ref: 'Block'
      }
    })
  }
}

const schemaActivity = new SchemaActivity();
export const ModelActivity: Model<IModelActivity> =
  model<IModelActivity>('Activity', schemaActivity);