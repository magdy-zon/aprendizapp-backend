import { Document, Schema } from 'mongoose';

export interface IModelProvider extends Document {
  description: string;
  phone: string[];
  verified: boolean;
  userId: Schema.Types.ObjectId;
  email: string[];
  contactBy: string;
  profilePhoto: string;
  experience: string[];
  worktime: string[];
  enabled: boolean;
  rfc: string;
  nickname: string;
  createdAt: Date;
  updatedAt: Date;
}