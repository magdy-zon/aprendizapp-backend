import { injectable } from "inversify";
import { IBndStudentRead } from "@clean/core";

@injectable()
export class ImplBndStudentRead implements IBndStudentRead {
  public async getProperties() {
    return null;
  }
}