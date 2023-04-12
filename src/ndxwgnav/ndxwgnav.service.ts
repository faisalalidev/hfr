import { Injectable } from '@nestjs/common';
import { CreateNdxwgnavInput } from './dto/create-ndxwgnav.input';
import { UpdateNdxwgnavInput } from './dto/update-ndxwgnav.input';

@Injectable()
export class NdxwgnavService {
  create(createNdxwgnavInput: CreateNdxwgnavInput) {
    return 'This action adds a new ndxwgnav';
  }

  findAll() {
    return `This action returns all ndxwgnav`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ndxwgnav`;
  }

  update(id: number, updateNdxwgnavInput: UpdateNdxwgnavInput) {
    return `This action updates a #${id} ndxwgnav`;
  }

  remove(id: number) {
    return `This action removes a #${id} ndxwgnav`;
  }
}
