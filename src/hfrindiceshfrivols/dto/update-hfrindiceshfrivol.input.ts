import { CreateHfrindiceshfrivolInput } from './create-hfrindiceshfrivol.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateHfrindiceshfrivolInput extends PartialType(CreateHfrindiceshfrivolInput) {
  id: number;
}
