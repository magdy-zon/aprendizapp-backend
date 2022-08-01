import { injectable } from "inversify";
import { IBndStudentRead } from "@clean/core";
import { ModelStudent } from "../../models";

@injectable()
export class ImplBndStudentRead implements IBndStudentRead {
  public async allStudents() {
    try {
      const students = await ModelStudent.find();
      console.log(students)
    } catch (error) {
      console.log(error)
    }
  }
}