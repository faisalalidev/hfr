import { Injectable } from '@nestjs/common';
import { CreateHfrindiceshfrudailyInput } from './dto/create-hfrindiceshfrudaily.input';
import { UpdateHfrindiceshfrudailyInput } from './dto/update-hfrindiceshfrudaily.input';

@Injectable()
export class HfrindiceshfrudailyService {
  create(createHfrindiceshfrudailyInput: CreateHfrindiceshfrudailyInput) {
    return 'This action adds a new hfrindiceshfrudaily';
  }

  findAll() {
    return `This action returns all hfrindiceshfrudaily`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hfrindiceshfrudaily`;
  }

  update(id: number, updateHfrindiceshfrudailyInput: UpdateHfrindiceshfrudailyInput) {
    return `This action updates a #${id} hfrindiceshfrudaily`;
  }

  remove(id: number) {
    return `This action removes a #${id} hfrindiceshfrudaily`;
  }
}
