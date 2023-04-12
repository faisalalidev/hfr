import { Injectable } from '@nestjs/common';
import { CreateHfrindiceshfrudailytestInput } from './dto/create-hfrindiceshfrudailytest.input';
import { UpdateHfrindiceshfrudailytestInput } from './dto/update-hfrindiceshfrudailytest.input';

@Injectable()
export class HfrindiceshfrudailytestService {
  create(createHfrindiceshfrudailytestInput: CreateHfrindiceshfrudailytestInput) {
    return 'This action adds a new hfrindiceshfrudailytest';
  }

  findAll() {
    return `This action returns all hfrindiceshfrudailytest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hfrindiceshfrudailytest`;
  }

  update(id: number, updateHfrindiceshfrudailytestInput: UpdateHfrindiceshfrudailytestInput) {
    return `This action updates a #${id} hfrindiceshfrudailytest`;
  }

  remove(id: number) {
    return `This action removes a #${id} hfrindiceshfrudailytest`;
  }
}
