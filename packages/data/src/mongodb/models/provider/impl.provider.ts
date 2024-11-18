import { Schema, model, Model } from 'mongoose';
import { IModelProvider } from '.';


class SchemaProvider extends Schema {
  constructor() {
    super({
      description: {
        type: String,
        required: false
      },
      phone: [{
        type: String,
        required: false
      }],
      verified: {
        type: Boolean,
        required: true
      },
      userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
      },
      email: {
        type: String,
        required: true
      },
      contactBy: {
        type: String,
        required: true
      },
      profilePhoto: {
        type: String,
        required: true
      },
      experience: [{
        type: String,
        required: true
      }],
      worktime: [{
        type: String,
        required: true
      }],
      enabled: {
        type: Boolean,
        required: true
      },
      rfc: {
        type: String,
        required: true
      },
      nickname: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        required: true
      },
      updatedAt: {
        type: Date,
        required: false
      },
    },
    {
      timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
      },
    })
  }
}

const schemaProvider = new SchemaProvider();
export const ModelProvider: Model<IModelProvider> = 
  model<IModelProvider>('Provider', schemaProvider);