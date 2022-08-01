import { Schema, model, Model } from 'mongoose';
import { IModelActivity } from '.';

class SchemaActivity extends Schema {
  constructor() {
    super({
      title: {
        type: String,
        required: false
      },
      subtitle: {
        type: String,
        required: false
      },
      notes: [{
        type: String,
        required: true
      }],
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