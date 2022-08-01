import { Document, Schema } from 'mongoose';
import { IModelBlock } from '..';


export interface IModelActivity extends Document {
  title: string;
  subtitle: string;
  notes: string[];
  block: Schema.Types.ObjectId | IModelBlock;
}