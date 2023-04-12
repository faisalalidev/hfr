import { Injectable } from '@nestjs/common';
import { CreateUserlogintrackingInput } from './dto/create-userlogintracking.input';
import { UpdateUserlogintrackingInput } from './dto/update-userlogintracking.input';

@Injectable()
export class UserlogintrackingService {
  create(createUserlogintrackingInput: CreateUserlogintrackingInput) {
    return 'This action adds a new userlogintracking';
  }

  findAll() {
    return `This action returns all userlogintracking`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userlogintracking`;
  }

  update(id: number, updateUserlogintrackingInput: UpdateUserlogintrackingInput) {
    return `This action updates a #${id} userlogintracking`;
  }

  remove(id: number) {
    return `This action removes a #${id} userlogintracking`;
  }
}
