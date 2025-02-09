import { ContainerModule, interfaces } from 'inversify';
import { COMMON } from './';

import { BaseQuestionnaireController } from '../modules/questionnaire';
import { BaseBlockController } from '../modules/block';
import { BaseUserController } from '../modules/user';
import { BaseStudentController } from '../modules/student'; 
import { BaseActivityController} from '../modules/activity';

import { 
  ImplBndActivityRead,
  ImplBndBlockRead,
  ImplBndQuestionnaireRead, 
  ImplBndStudentRead, 
  ImplBndUserWrite
} from '@clean/data';
import { 
  BaseUseCaseActivity,
  BaseUseCaseBlock,
  BaseUseCaseQuestionnaire, 
  BaseUseCaseStudent, 
  BaseUseCaseUser, 
  IBndActivityRead, 
  IBndBlockRead, 
  IBndQuestionnaireRead,
  IBndStudentRead, 
  IBndUserWrite
} from '@clean/core';
import { controller } from 'inversify-express-utils';

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

  //User
  bind<IBndUserWrite>(COMMON.bndUserWrite).to(ImplBndUserWrite);
  bind<BaseUseCaseUser>('BaseUseCaseUser').toDynamicValue((context) => {
    return new BaseUseCaseUser(
      context.container.get<IBndUserWrite>(COMMON.bndUserWrite)
    );
  });
  controller('')(BaseUserController);
});
