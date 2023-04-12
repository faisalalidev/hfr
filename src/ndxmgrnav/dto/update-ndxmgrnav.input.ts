import { CreateNdxmgrnavInput } from './create-ndxmgrnav.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateNdxmgrnavInput extends PartialType(CreateNdxmgrnavInput) {
  id: number;
}
