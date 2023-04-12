import { CreateHfrindiceshfrbInput } from './create-hfrindiceshfrb.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateHfrindiceshfrbInput extends PartialType(CreateHfrindiceshfrbInput) {
  id: number;
}
