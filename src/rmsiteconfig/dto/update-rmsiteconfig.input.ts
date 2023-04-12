import { CreateRmsiteconfigInput } from './create-rmsiteconfig.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateRmsiteconfigInput extends PartialType(CreateRmsiteconfigInput) {
  id: number;
}
