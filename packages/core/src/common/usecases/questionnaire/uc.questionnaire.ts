import { IBndQuestionnaireRead } from "../../boundaries";

export class BaseUseCaseQuestionnaire {
  constructor(
    private bndQuestionnaireRead: IBndQuestionnaireRead
  ) {}

  public async allQuestionnaires(activityId: string) {
    return await this.bndQuestionnaireRead.allQuestionnaires(activityId);
  }
}

