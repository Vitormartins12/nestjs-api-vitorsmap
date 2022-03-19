import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'customText', async: false })
export class ValidDocument implements ValidatorConstraintInterface {
  validate(text: string) {
    // regra de negócio para o documento
    return text === 'meu cara';
  }

  defaultMessage() {
    return 'não é um documento válido';
  }
}
