import { controller } from 'inversify-express-utils';
import { ContainerModule, interfaces } from 'inversify';
import { COMMON } from './';
import { 
  BaseStudentController, 
  BaseQuestionnaireController,
  BaseActivityController,
  BaseBlockController,
} from '../modules/common';
import { 
  ImplBndActivityRead,
  ImplBndBlockRead,
  ImplBndQuestionnaireRead, 
  ImplBndStudentRead 
} from '@clean/data';
import { 
  BaseUseCaseActivity,
  BaseUseCaseBlock,
  BaseUseCaseQuestionnaire, 
  BaseUseCaseStudent, 
  IBndActivityRead, 
  IBndBlockRead, 
  IBndQuestionnaireRead, 
  IBndStudentRead 
} from '@clean/core';

export const DataModule = new ContainerModule((bind: interfaces.Bind) => {
  // Student
  bind<IBndStudentRead>(COMMON.bndStudentRead).to(ImplBndStudentRead);
  bind<BaseUseCaseStudent>('BaseUseCaseStudent').toDynamicValue((context) => {
    return new BaseUseCaseStudent(
      context.container.get<IBndStudentRead>(COMMON.bndStudentRead)
    );
  });
  controller('')(BaseStudentController);

  // Questionnaire
  bind<IBndQuestionnaireRead>(COMMON.bndQuestionnaireRead).to(ImplBndQuestionnaireRead);
  bind<BaseUseCaseQuestionnaire>('BaseUseCaseQuestionnaire').toDynamicValue((context) => {
    return new BaseUseCaseQuestionnaire(
      context.container.get<IBndQuestionnaireRead>(COMMON.bndQuestionnaireRead)
    );
  });
  controller('')(BaseQuestionnaireController);

  // Activity
  bind<IBndActivityRead>(COMMON.bndActivityRead).to(ImplBndActivityRead);
  bind<BaseUseCaseActivity>('BaseUseCaseActivity').toDynamicValue((context) => {
    return new BaseUseCaseActivity(
      context.container.get<IBndActivityRead>(COMMON.bndActivityRead)
    );
  });
  controller('')(BaseActivityController);

  // Block
  bind<IBndBlockRead>(COMMON.bndBlockRead).to(ImplBndBlockRead);
  bind<BaseUseCaseBlock>('BaseUseCaseBlock').toDynamicValue((context) => {
    return new BaseUseCaseBlock(
      context.container.get<IBndBlockRead>(COMMON.bndBlockRead)
    );
  });
  controller('')(BaseBlockController);
});
