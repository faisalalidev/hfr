import { CreateHfrindiceshfriInput } from './create-hfrindiceshfri.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateHfrindiceshfriInput extends PartialType(CreateHfrindiceshfriInput) {
  id: number;
}
