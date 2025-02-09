import { IParamsUserEntity } from "../../entities";

export interface IBndUserWrite {
  createUser(body: IParamsUserEntity): Promise<void>;
}