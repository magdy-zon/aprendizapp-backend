import { IBndUserWrite } from "../../boundaries";


export class BaseUseCaseUser {
  constructor(
    private bndUserWrite: IBndUserWrite
  ) {}

  public async createUser(user) {
    return this.bndUserWrite.createUser(user);
  }
}