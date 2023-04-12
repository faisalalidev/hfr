import { CreateTrakkernavInput } from './create-trakkernav.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateTrakkernavInput extends PartialType(CreateTrakkernavInput) {
  id: number;
}
