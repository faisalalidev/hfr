import { Injectable } from '@nestjs/common';
import { CreateHfrindiceshfradailyInput } from './dto/create-hfrindiceshfradaily.input';
import { UpdateHfrindiceshfradailyInput } from './dto/update-hfrindiceshfradaily.input';

@Injectable()
export class HfrindiceshfradailyService {
  create(createHfrindiceshfradailyInput: CreateHfrindiceshfradailyInput) {
    return 'This action adds a new hfrindiceshfradaily';
  }

  findAll() {
    return `This action returns all hfrindiceshfradaily`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hfrindiceshfradaily`;
  }

  update(id: number, updateHfrindiceshfradailyInput: UpdateHfrindiceshfradailyInput) {
    return `This action updates a #${id} hfrindiceshfradaily`;
  }

  remove(id: number) {
    return `This action removes a #${id} hfrindiceshfradaily`;
  }
}
