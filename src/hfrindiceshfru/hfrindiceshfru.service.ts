import { Injectable } from '@nestjs/common';
import { CreateHfrindiceshfruInput } from './dto/create-hfrindiceshfru.input';
import { UpdateHfrindiceshfruInput } from './dto/update-hfrindiceshfru.input';

@Injectable()
export class HfrindiceshfruService {
  create(createHfrindiceshfruInput: CreateHfrindiceshfruInput) {
    return 'This action adds a new hfrindiceshfru';
  }

  findAll() {
    return `This action returns all hfrindiceshfru`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hfrindiceshfru`;
  }

  update(id: number, updateHfrindiceshfruInput: UpdateHfrindiceshfruInput) {
    return `This action updates a #${id} hfrindiceshfru`;
  }

  remove(id: number) {
    return `This action removes a #${id} hfrindiceshfru`;
  }
}
