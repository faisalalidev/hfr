import { CreateHfrifwcsince2007Input } from './create-hfrifwcsince2007.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateHfrifwcsince2007Input extends PartialType(CreateHfrifwcsince2007Input) {
  id: number;
}
