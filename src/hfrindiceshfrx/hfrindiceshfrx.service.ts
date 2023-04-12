import { Injectable } from '@nestjs/common';
import { CreateHfrindiceshfrxInput } from './dto/create-hfrindiceshfrx.input';
import { UpdateHfrindiceshfrxInput } from './dto/update-hfrindiceshfrx.input';

@Injectable()
export class HfrindiceshfrxService {
  create(createHfrindiceshfrxInput: CreateHfrindiceshfrxInput) {
    return 'This action adds a new hfrindiceshfrx';
  }

  findAll() {
    return `This action returns all hfrindiceshfrx`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hfrindiceshfrx`;
  }

  update(id: number, updateHfrindiceshfrxInput: UpdateHfrindiceshfrxInput) {
    return `This action updates a #${id} hfrindiceshfrx`;
  }

  remove(id: number) {
    return `This action removes a #${id} hfrindiceshfrx`;
  }
}
