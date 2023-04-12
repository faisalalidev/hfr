import { CreateHfrindiceshfri500Input } from './create-hfrindiceshfri500.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateHfrindiceshfri500Input extends PartialType(CreateHfrindiceshfri500Input) {
  id: number;
}
