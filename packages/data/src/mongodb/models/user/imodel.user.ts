import { Document } from 'mongoose';

export interface IModelUser extends Document {
  name: string;
  first_lastname: string;
  second_lastname: number;
  birthdate: string;
  verified: Boolean;
  createdAt: Date;
  updatedAt: Date;
}