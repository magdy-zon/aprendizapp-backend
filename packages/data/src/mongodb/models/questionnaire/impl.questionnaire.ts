import { Schema, model, Model } from 'mongoose';
import { IModelQuestionnaire } from './';


class SchemaQuestionnaire extends Schema {
  constructor() {
    super({
      activity: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Activity'
      },
      question: {
        type: String,
        required: false,
      },
      isOpen: {
        type: Boolean,
        required: false
      },
      options: [
        {
          text: {
            type: String,
            required: false
          },
          isCorrect: {
            type: Boolean,
            required: false
          }
        }
      ]
    })
  }
}

const schemaQuestionnaire = new SchemaQuestionnaire();
export const ModelQuestionnaire: Model<IModelQuestionnaire> =
  model<IModelQuestionnaire>('Questionnaire', schemaQuestionnaire);