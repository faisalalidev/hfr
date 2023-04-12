import { CreateSeopageInput } from './create-seopage.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateSeopageInput extends PartialType(CreateSeopageInput) {
  id: number;
}
