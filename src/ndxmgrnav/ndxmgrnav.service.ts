import { Injectable } from '@nestjs/common';
import { CreateNdxmgrnavInput } from './dto/create-ndxmgrnav.input';
import { UpdateNdxmgrnavInput } from './dto/update-ndxmgrnav.input';

@Injectable()
export class NdxmgrnavService {
  create(createNdxmgrnavInput: CreateNdxmgrnavInput) {
    return 'This action adds a new ndxmgrnav';
  }

  findAll() {
    return `This action returns all ndxmgrnav`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ndxmgrnav`;
  }

  update(id: number, updateNdxmgrnavInput: UpdateNdxmgrnavInput) {
    return `This action updates a #${id} ndxmgrnav`;
  }

  remove(id: number) {
    return `This action removes a #${id} ndxmgrnav`;
  }
}
