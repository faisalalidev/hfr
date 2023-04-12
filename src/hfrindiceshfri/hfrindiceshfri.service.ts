import { Injectable } from '@nestjs/common';
import { CreateHfrindiceshfriInput } from './dto/create-hfrindiceshfri.input';
import { UpdateHfrindiceshfriInput } from './dto/update-hfrindiceshfri.input';

@Injectable()
export class HfrindiceshfriService {
  create(createHfrindiceshfriInput: CreateHfrindiceshfriInput) {
    return 'This action adds a new hfrindiceshfri';
  }

  findAll() {
    return `This action returns all hfrindiceshfri`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hfrindiceshfri`;
  }

  update(id: number, updateHfrindiceshfriInput: UpdateHfrindiceshfriInput) {
    return `This action updates a #${id} hfrindiceshfri`;
  }

  remove(id: number) {
    return `This action removes a #${id} hfrindiceshfri`;
  }
}
