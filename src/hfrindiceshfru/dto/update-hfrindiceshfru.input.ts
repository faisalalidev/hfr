import { CreateHfrindiceshfruInput } from './create-hfrindiceshfru.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateHfrindiceshfruInput extends PartialType(CreateHfrindiceshfruInput) {
  id: number;
}
