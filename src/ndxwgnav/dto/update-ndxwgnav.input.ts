import { CreateNdxwgnavInput } from './create-ndxwgnav.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateNdxwgnavInput extends PartialType(CreateNdxwgnavInput) {
  id: number;
}
