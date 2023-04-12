import { Injectable } from '@nestjs/common';
import { CreateHfrindiceshfrpInput } from './dto/create-hfrindiceshfrp.input';
import { UpdateHfrindiceshfrpInput } from './dto/update-hfrindiceshfrp.input';

@Injectable()
export class HfrindiceshfrpService {
  create(createHfrindiceshfrpInput: CreateHfrindiceshfrpInput) {
    return 'This action adds a new hfrindiceshfrp';
  }

  findAll() {
    return `This action returns all hfrindiceshfrp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hfrindiceshfrp`;
  }

  update(id: number, updateHfrindiceshfrpInput: UpdateHfrindiceshfrpInput) {
    return `This action updates a #${id} hfrindiceshfrp`;
  }

  remove(id: number) {
    return `This action removes a #${id} hfrindiceshfrp`;
  }
}
