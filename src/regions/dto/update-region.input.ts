import { CreateRegionInput } from './create-region.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateRegionInput extends PartialType(CreateRegionInput) {
  id: number;
}
