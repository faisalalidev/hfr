import { CreateTrakkerrorInput } from './create-trakkerror.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateTrakkerrorInput extends PartialType(CreateTrakkerrorInput) {
  id: number;
}
