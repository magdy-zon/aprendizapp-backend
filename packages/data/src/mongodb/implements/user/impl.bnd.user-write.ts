import { injectable } from "inversify";
import { IBndUserWrite } from "@clean/core";
import { IModelUser, ModelUser } from "../../models";
import { startSession } from "mongoose";

@injectable()
export class ImplBndUserWrite implements IBndUserWrite {
  public async createUser(user) {
    const session = await startSession();
    session.startTransaction();

    try {
      const user: IModelUser = new ModelUser({
        name: 'test',
        first_lastname: 'test',
        second_lastname: 'test',
        birthdate: new Date().toISOString,
        verified: false,
        createdAt: new Date()
      });

      await user.save();

      await session.commitTransaction();
      session.endSession();
      console.log("User created succesfully");
    } catch (error) {
      console.log(error);
    }
  }
}