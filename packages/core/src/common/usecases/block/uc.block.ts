import { IBndBlockRead } from "../../boundaries";

export class BaseUseCaseBlock {
  constructor(
    private bndBlockRead: IBndBlockRead
  ) {}

  public async allBlocks() {
    return await this.bndBlockRead.getBlocks();
  }
}

