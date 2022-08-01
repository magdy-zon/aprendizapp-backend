import { inject } from "inversify";
import { BaseHttpController, httpGet } from "inversify-express-utils";
import { BaseUseCaseStudent } from "@clean/core";


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
