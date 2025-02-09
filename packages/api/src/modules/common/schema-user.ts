import { ParamSchema } from 'express-validator';

export const baseSchemaUser: Record<string, ParamSchema> = {
  name: {
    in: 'body',
    isString: true,
    errorMessage: 'Name is wrong',
    isLength: {
      options: { min: 2, max: 64 },
      errorMessage: 'Name cannot be less than 2 chars and more than 64 characters',
    },
    optional: false
  },
  first_lastname: {
    in: 'body',
    errorMessage: 'First lastname is wrong',
    isLength: {
      options: { min: 2, max: 64 },
      errorMessage: 'First lastame cannot be less than 2 chars and more than 64 characters',
    },
    optional: false
  },
  second_lastname: {
    in: 'body',
    errorMessage: 'Second lastname is wrong',
    isLength: {
      options: { min: 2, max: 64 },
      errorMessage: 'Second lastname cannot be less than 2 chars and more than 64 characters',
    },
    optional: false
  },
  birthdate: {
    in: 'body',
    errorMessage: 'Email is wrong',
    isDate: true
  },
};