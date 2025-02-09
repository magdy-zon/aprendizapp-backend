import { injectable } from 'inversify';
import { startSession } from 'mongoose';

import { IModelUser, ModelUser } from '../../models';
import { IBndUserWrite } from '@clean/core';



@injectable()
export class ImplBndUserWrite implements IBndUserWrite {
  public async createUser(user) : Promise<void> {
    const session = await startSession();
    session.startTransaction();

    try {
      const userToSave: IModelUser = new ModelUser({
        name: user.name,
        first_lastname: user.first_lastname,
        second_lastname: user.second_lastname,
        birthdate: user.birthdate,
        createdAt: new Date()
      });

      await userToSave.save();

      await session.commitTransaction();
      session.endSession();
      console.log('User created succesfully');
    } catch (error) {
      console.log(error);
    }
  }
}