import { CreateHfrindiceshfrudailyInput } from './create-hfrindiceshfrudaily.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateHfrindiceshfrudailyInput extends PartialType(CreateHfrindiceshfrudailyInput) {
  id: number;
}
