import { injectable } from "inversify";
import { IBndQuestionnaireRead } from "@clean/core";
import { ModelActivity, ModelQuestionnaire } from "../../models";

@injectable()
export class ImplBndQuestionnaireRead implements IBndQuestionnaireRead {
  public async allQuestionnaires(activityId: string) {
    try {
      const activity = await ModelActivity.findById(activityId);
      if(!activity) return null;

      const questionnaires = await ModelQuestionnaire.find({
        activity: activityId
      }, {
        block: 0,
        activity: 0
      });

      return {
        activity: {
          _id: activity.id,
          title: activity.title,
          activity: activity.subtitle,
          notes: activity.notes
        },
        questionnaire: questionnaires
      }
    } catch (error) {
      throw console.log(error)
    }
  }
}