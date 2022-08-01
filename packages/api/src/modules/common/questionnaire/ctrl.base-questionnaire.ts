import { inject } from "inversify";
import { BaseHttpController, httpGet, requestParam } from "inversify-express-utils";
import { BaseUseCaseQuestionnaire } from "@clean/core";


export class BaseQuestionnaireController extends BaseHttpController {
  @inject('BaseUseCaseQuestionnaire') private ucQuestionnaire: BaseUseCaseQuestionnaire;

  constructor() {
    super();
  }

  @httpGet('/questionnaire/:activityId')
  public async getQuestionnaire(
    @requestParam('activityId') activityId: string,
  ) {
    const response = await this.ucQuestionnaire.allQuestionnaires(activityId);

    return { response };
  }
}