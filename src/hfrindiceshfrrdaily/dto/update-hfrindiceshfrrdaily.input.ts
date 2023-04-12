import { CreateHfrindiceshfrrdailyInput } from './create-hfrindiceshfrrdaily.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateHfrindiceshfrrdailyInput extends PartialType(CreateHfrindiceshfrrdailyInput) {
  id: number;
}
