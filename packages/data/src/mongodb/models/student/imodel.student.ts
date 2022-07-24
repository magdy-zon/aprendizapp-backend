import { Document } from 'mongoose';

export interface IModelStudent extends Document {
  email: string;
  username: string;
  age: number;
  password: string;
  verified: string;
  createdAt: Date;
  updatedAt: Date;
}