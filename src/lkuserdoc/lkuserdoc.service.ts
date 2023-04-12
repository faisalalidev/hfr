import { Injectable } from '@nestjs/common';
import { CreateLkuserdocInput } from './dto/create-lkuserdoc.input';
import { UpdateLkuserdocInput } from './dto/update-lkuserdoc.input';

@Injectable()
export class LkuserdocService {
  create(createLkuserdocInput: CreateLkuserdocInput) {
    return 'This action adds a new lkuserdoc';
  }

  findAll() {
    return `This action returns all lkuserdoc`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lkuserdoc`;
  }

  update(id: number, updateLkuserdocInput: UpdateLkuserdocInput) {
    return `This action updates a #${id} lkuserdoc`;
  }

  remove(id: number) {
    return `This action removes a #${id} lkuserdoc`;
  }
}
