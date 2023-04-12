import { CreateLkgroupInput } from './create-lkgroup.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateLkgroupInput extends PartialType(CreateLkgroupInput) {
  id: number;
}
