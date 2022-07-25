import { IBndStudentRead } from "../../boundaries";


export class BaseUseCaseStudent {
  constructor(
    private bndStudentRead: IBndStudentRead
  ) {}

  public async allStudents() {
    return this.bndStudentRead.allStudents();
  }
}
