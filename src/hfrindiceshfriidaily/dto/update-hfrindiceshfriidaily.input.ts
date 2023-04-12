import { CreateHfrindiceshfriidailyInput } from './create-hfrindiceshfriidaily.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateHfrindiceshfriidailyInput extends PartialType(CreateHfrindiceshfriidailyInput) {
  id: number;
}
