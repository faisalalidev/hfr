import { Injectable } from '@nestjs/common';
import { CreateHfrindiceshfrivolInput } from './dto/create-hfrindiceshfrivol.input';
import { UpdateHfrindiceshfrivolInput } from './dto/update-hfrindiceshfrivol.input';

@Injectable()
export class HfrindiceshfrivolsService {
  create(createHfrindiceshfrivolInput: CreateHfrindiceshfrivolInput) {
    return 'This action adds a new hfrindiceshfrivol';
  }

  findAll() {
    return `This action returns all hfrindiceshfrivols`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hfrindiceshfrivol`;
  }

  update(id: number, updateHfrindiceshfrivolInput: UpdateHfrindiceshfrivolInput) {
    return `This action updates a #${id} hfrindiceshfrivol`;
  }

  remove(id: number) {
    return `This action removes a #${id} hfrindiceshfrivol`;
  }
}
