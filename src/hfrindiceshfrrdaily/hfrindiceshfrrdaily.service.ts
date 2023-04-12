import { Injectable } from '@nestjs/common';
import { CreateHfrindiceshfrrdailyInput } from './dto/create-hfrindiceshfrrdaily.input';
import { UpdateHfrindiceshfrrdailyInput } from './dto/update-hfrindiceshfrrdaily.input';

@Injectable()
export class HfrindiceshfrrdailyService {
  create(createHfrindiceshfrrdailyInput: CreateHfrindiceshfrrdailyInput) {
    return 'This action adds a new hfrindiceshfrrdaily';
  }

  findAll() {
    return `This action returns all hfrindiceshfrrdaily`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hfrindiceshfrrdaily`;
  }

  update(id: number, updateHfrindiceshfrrdailyInput: UpdateHfrindiceshfrrdailyInput) {
    return `This action updates a #${id} hfrindiceshfrrdaily`;
  }

  remove(id: number) {
    return `This action removes a #${id} hfrindiceshfrrdaily`;
  }
}
