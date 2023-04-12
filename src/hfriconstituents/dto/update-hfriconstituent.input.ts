import { CreateHfriconstituentInput } from './create-hfriconstituent.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateHfriconstituentInput extends PartialType(CreateHfriconstituentInput) {
  id: number;
}
