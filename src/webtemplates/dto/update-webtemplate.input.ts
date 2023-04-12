import { CreateWebtemplateInput } from './create-webtemplate.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateWebtemplateInput extends PartialType(CreateWebtemplateInput) {
  id: number;
}
