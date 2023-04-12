import { Injectable } from '@nestjs/common';
import { CreateHfrindiceshfriidailyInput } from './dto/create-hfrindiceshfriidaily.input';
import { UpdateHfrindiceshfriidailyInput } from './dto/update-hfrindiceshfriidaily.input';

@Injectable()
export class HfrindiceshfriidailyService {
  create(createHfrindiceshfriidailyInput: CreateHfrindiceshfriidailyInput) {
    return 'This action adds a new hfrindiceshfriidaily';
  }

  findAll() {
    return `This action returns all hfrindiceshfriidaily`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hfrindiceshfriidaily`;
  }

  update(id: number, updateHfrindiceshfriidailyInput: UpdateHfrindiceshfriidailyInput) {
    return `This action updates a #${id} hfrindiceshfriidaily`;
  }

  remove(id: number) {
    return `This action removes a #${id} hfrindiceshfriidaily`;
  }
}
