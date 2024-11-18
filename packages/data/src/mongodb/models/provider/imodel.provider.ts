import { Document, Schema } from 'mongoose';

export interface IModelProvider extends Document {
  description: string;
  phone: string[];
  verified: Boolean;
  userId: Schema.Types.ObjectId;
  email: string[];
  contactBy: string;
  profilePhoto: string;
  experience: string[];
  worktime: string[];
  enabled: Boolean;
  rfc: string;
  nickname: string;
  createdAt: Date;
  updatedAt: Date;
}