import { CreateHfrifofsince2007Input } from './create-hfrifofsince2007.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateHfrifofsince2007Input extends PartialType(CreateHfrifofsince2007Input) {
  id: number;
}
