import { IsEmail, IsNotEmpty, IsString, Validate } from 'class-validator';
import { ValidDocument } from '../validators';

export class AuthDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  //   @Validate(ValidDocument)
  //   document: string;
}
