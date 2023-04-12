import { CreateHfrindiceshfriinstInput } from './create-hfrindiceshfriinst.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateHfrindiceshfriinstInput extends PartialType(CreateHfrindiceshfriinstInput) {
  id: number;
}
