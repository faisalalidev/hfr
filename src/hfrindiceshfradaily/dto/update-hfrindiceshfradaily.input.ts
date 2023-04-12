import { CreateHfrindiceshfradailyInput } from './create-hfrindiceshfradaily.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateHfrindiceshfradailyInput extends PartialType(CreateHfrindiceshfradailyInput) {
  id: number;
}
