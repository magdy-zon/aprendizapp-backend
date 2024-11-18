import { Schema, model, Model } from 'mongoose';
import { IModelUser } from '.';


class SchemaUser extends Schema {
  constructor() {
    super({
      name: {
        type: String,
        required: false
      },
      first_lastname: {
        type: String,
        required: false
      },
      second_lastname: {
        type: String,
        required: false
      },
      birthdate: {
        type: String,
        required: true
      },
      verified: {
        type: Boolean,
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

const schemaUser = new SchemaUser();
export const ModelUser: Model<IModelUser> = 
  model<IModelUser>('User', schemaUser);