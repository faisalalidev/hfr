import { CreateHfrindiceshfrudailytestInput } from './create-hfrindiceshfrudailytest.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateHfrindiceshfrudailytestInput extends PartialType(CreateHfrindiceshfrudailytestInput) {
  id: number;
}
