import { Document, Schema } from 'mongoose';
import { IModelBlock } from '..';


export interface IModelActivity extends Document {
  name: string;
  block: Schema.Types.ObjectId | IModelBlock;
}