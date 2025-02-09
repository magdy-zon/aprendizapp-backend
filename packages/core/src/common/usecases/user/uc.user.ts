import { DateTime } from "luxon";

import { IBndUserWrite } from "../../boundaries";
import { IParamsUserEntity } from "src/common/entities";


export class BaseUseCaseUser {
  constructor(
    private bndUserWrite: IBndUserWrite
  ) {}

  public async createUser(user : IParamsUserEntity) {

    const userToDB = {
      name: user.name,
      first_lastname: user.first_lastname,
      second_lastname: user.second_lastname,
      birthdate: DateTime.fromISO(user.birthdate),
    }

    return this.bndUserWrite.createUser(userToDB);
  }
}