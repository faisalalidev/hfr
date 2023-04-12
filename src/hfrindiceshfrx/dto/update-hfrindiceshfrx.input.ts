import { CreateHfrindiceshfrxInput } from './create-hfrindiceshfrx.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateHfrindiceshfrxInput extends PartialType(CreateHfrindiceshfrxInput) {
  id: number;
}
