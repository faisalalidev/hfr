import { Injectable } from '@nestjs/common';
import { CreateHfrindiceshfrrInput } from './dto/create-hfrindiceshfrr.input';
import { UpdateHfrindiceshfrrInput } from './dto/update-hfrindiceshfrr.input';

@Injectable()
export class HfrindiceshfrrService {
  create(createHfrindiceshfrrInput: CreateHfrindiceshfrrInput) {
    return 'This action adds a new hfrindiceshfrr';
  }

  findAll() {
    return `This action returns all hfrindiceshfrr`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hfrindiceshfrr`;
  }

  update(id: number, updateHfrindiceshfrrInput: UpdateHfrindiceshfrrInput) {
    return `This action updates a #${id} hfrindiceshfrr`;
  }

  remove(id: number) {
    return `This action removes a #${id} hfrindiceshfrr`;
  }
}
