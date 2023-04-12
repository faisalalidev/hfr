import { Injectable } from '@nestjs/common';
import { CreateHfrindiceshfrbInput } from './dto/create-hfrindiceshfrb.input';
import { UpdateHfrindiceshfrbInput } from './dto/update-hfrindiceshfrb.input';

@Injectable()
export class HfrindiceshfrbService {
  create(createHfrindiceshfrbInput: CreateHfrindiceshfrbInput) {
    return 'This action adds a new hfrindiceshfrb';
  }

  findAll() {
    return `This action returns all hfrindiceshfrb`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hfrindiceshfrb`;
  }

  update(id: number, updateHfrindiceshfrbInput: UpdateHfrindiceshfrbInput) {
    return `This action updates a #${id} hfrindiceshfrb`;
  }

  remove(id: number) {
    return `This action removes a #${id} hfrindiceshfrb`;
  }
}
