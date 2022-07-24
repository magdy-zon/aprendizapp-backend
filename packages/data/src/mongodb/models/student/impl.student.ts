import { Schema, model, Model } from 'mongoose';
import { IModelStudent } from './';


class SchemaStudent extends Schema {
  constructor() {
    super({
      email: {
        type: String,
        required: true
      },
      username: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      verified: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        required: true
      },
      updatedAt: {
        type: Date,
        required: true
      },
    },
    {
      timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
      },
    })
  }
}

const schemaStudent = new SchemaStudent();
export const ModelStudent: Model<IModelStudent> = 
  model<IModelStudent>('Student', schemaStudent);