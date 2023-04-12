import { CreateHfrxconstituentInput } from './create-hfrxconstituent.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateHfrxconstituentInput extends PartialType(CreateHfrxconstituentInput) {
  id: number;
}
