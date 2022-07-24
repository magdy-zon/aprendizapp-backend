import { Document, Schema } from 'mongoose';

export interface IBaseOptions {
    text: string;
    isCorrect: boolean;
}
export interface IModelQuestionnaire extends Document {
    activity: Schema.Types.ObjectId;
    question: string;
    options?: IBaseOptions[];
    isOpen: boolean;
}