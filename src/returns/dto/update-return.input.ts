import { CreateReturnInput } from './create-return.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateReturnInput extends PartialType(CreateReturnInput) {
  id: number;
}
