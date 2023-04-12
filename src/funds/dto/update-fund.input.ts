import { CreateFundInput } from './create-fund.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateFundInput extends PartialType(CreateFundInput) {
  id: number;
}
