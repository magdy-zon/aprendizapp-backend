import { BaseUseCaseStudent, IBndStudentRead } from '@clean/core';
import { ImplBndStudentRead } from '@clean/data';
import { ContainerModule, interfaces } from 'inversify';
import { controller } from 'inversify-express-utils';
import { BaseStudentController } from '../modules/common';
import { COMMON } from './';

export const DataModule = new ContainerModule((bind: interfaces.Bind) => {
  // Student
  bind<IBndStudentRead>(COMMON.bndStudentRead).to(ImplBndStudentRead);
  bind<BaseUseCaseStudent>('BaseUseCaseStudent').toDynamicValue((context) => {
    return new BaseUseCaseStudent(
      context.container.get<IBndStudentRead>(COMMON.bndStudentRead)
    );
  })
  controller('')(BaseStudentController);
});