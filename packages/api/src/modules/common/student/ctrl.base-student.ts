import { BaseUseCaseStudent } from "@clean/core";
import { inject } from "inversify";
import { BaseHttpController, httpGet } from "inversify-express-utils";


export class BaseStudentController extends BaseHttpController {
  @inject('BaseUseCaseStudent') private ucStudent: BaseUseCaseStudent;

  constructor() {
    super();
  }

  @httpGet('/students')
  public async getProperties() {
    const response = await this.ucStudent.allStudents();

    return { response };
  }
}
