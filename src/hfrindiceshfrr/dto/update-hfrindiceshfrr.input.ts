import { CreateHfrindiceshfrrInput } from './create-hfrindiceshfrr.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateHfrindiceshfrrInput extends PartialType(CreateHfrindiceshfrrInput) {
  id: number;
}
