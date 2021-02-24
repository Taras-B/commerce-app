import * as Joi from 'joi';
import { LoginDTO } from 'src/auth/dto/auth.dto';
import { JoiValidationPipe } from './joi-validation.pipe';

export class LoginValidationPipe extends JoiValidationPipe {
  public buildSchema(): Joi.Schema {
    return Joi.object<LoginDTO>({
      password: Joi.string().required().max(20),
      email: Joi.string().email().message('Must be a valid email').required(),
    });
  }
}
