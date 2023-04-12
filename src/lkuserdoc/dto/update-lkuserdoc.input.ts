import { CreateLkuserdocInput } from './create-lkuserdoc.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateLkuserdocInput extends PartialType(CreateLkuserdocInput) {
  id: number;
}
