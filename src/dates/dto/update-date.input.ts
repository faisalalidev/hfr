import { CreateDateInput } from './create-date.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateDateInput extends PartialType(CreateDateInput) {
  id: number;
}
