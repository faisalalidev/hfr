import { Injectable } from '@nestjs/common';
import { CreateHfrindiceshfrxdailyInput } from './dto/create-hfrindiceshfrxdaily.input';
import { UpdateHfrindiceshfrxdailyInput } from './dto/update-hfrindiceshfrxdaily.input';

@Injectable()
export class HfrindiceshfrxdailyService {
  create(createHfrindiceshfrxdailyInput: CreateHfrindiceshfrxdailyInput) {
    return 'This action adds a new hfrindiceshfrxdaily';
  }

  findAll() {
    return `This action returns all hfrindiceshfrxdaily`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hfrindiceshfrxdaily`;
  }

  update(id: number, updateHfrindiceshfrxdailyInput: UpdateHfrindiceshfrxdailyInput) {
    return `This action updates a #${id} hfrindiceshfrxdaily`;
  }

  remove(id: number) {
    return `This action removes a #${id} hfrindiceshfrxdaily`;
  }
}
