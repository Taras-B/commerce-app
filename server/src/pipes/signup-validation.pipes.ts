import * as Joi from 'joi';

import { JoiValidationPipe } from './joi-validation.pipe';

export class SignUpValidationPipe extends JoiValidationPipe {
  public buildSchema(): Joi.Schema {
    return Joi.object({
      password: Joi.string().required().min(5).max(20).messages({
        'string.base': `"password" should be a type of 'text'`,
        'string.empty': `"password" cannot be an empty field`,
        'string.min': `"password" should have a minimum length of 5`,
        'string.max': `"password" should have a maximum length of 25`,
        'any.required': `"password" is a required field`,
      }),
      email: Joi.string().email().message('Must be a valid email').required(),
      username: Joi.string().required().min(3).max(25).messages({
        'string.base': `"username" should be a type of 'text'`,
        'string.empty': `"username" cannot be an empty field`,
        'string.min': `"username" should have a minimum length of 3`,
        'string.max': `"username" should have a maximum length of 25`,
        'any.required': `"username" is a required field`,
      }),
    });
  }
}
