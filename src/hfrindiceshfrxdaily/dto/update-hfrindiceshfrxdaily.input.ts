import { CreateHfrindiceshfrxdailyInput } from './create-hfrindiceshfrxdaily.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateHfrindiceshfrxdailyInput extends PartialType(CreateHfrindiceshfrxdailyInput) {
  id: number;
}
