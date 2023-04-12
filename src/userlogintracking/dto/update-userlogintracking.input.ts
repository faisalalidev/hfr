import { CreateUserlogintrackingInput } from './create-userlogintracking.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateUserlogintrackingInput extends PartialType(CreateUserlogintrackingInput) {
  id: number;
}
