import { CreateHfrindiceshfraInput } from './create-hfrindiceshfra.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateHfrindiceshfraInput extends PartialType(CreateHfrindiceshfraInput) {
  id: number;
}
