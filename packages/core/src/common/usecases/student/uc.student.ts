import { IBndStudentRead } from "../../boundaries";


export class BaseUseCaseStudent {
  constructor(
    private bndStudentRead: IBndStudentRead
  ) {}

  public async getProperties() {
    return this.bndStudentRead.getProperties();
  }
}
