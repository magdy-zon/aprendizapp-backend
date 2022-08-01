import { IBndActivityRead } from "../../boundaries";

export class BaseUseCaseActivity {
  constructor(
    private bndActivityRead: IBndActivityRead
  ) {}

  public async allActivities(blockId: string) {
    return await this.bndActivityRead.allActivities(blockId);
  }
}

