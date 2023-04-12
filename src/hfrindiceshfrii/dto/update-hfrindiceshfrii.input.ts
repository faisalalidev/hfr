import { CreateHfrindiceshfriiInput } from './create-hfrindiceshfrii.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateHfrindiceshfriiInput extends PartialType(CreateHfrindiceshfriiInput) {
  id: number;
}
