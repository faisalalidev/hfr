import { CreateHfrindiceshfrpInput } from './create-hfrindiceshfrp.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateHfrindiceshfrpInput extends PartialType(CreateHfrindiceshfrpInput) {
  id: number;
}
