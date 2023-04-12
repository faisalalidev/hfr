import { CreatePrfdstgrossInput } from './create-prfdstgross.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePrfdstgrossInput extends PartialType(CreatePrfdstgrossInput) {
  id: number;
}
