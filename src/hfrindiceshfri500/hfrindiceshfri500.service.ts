import { Injectable } from '@nestjs/common';
import { CreateHfrindiceshfri500Input } from './dto/create-hfrindiceshfri500.input';
import { UpdateHfrindiceshfri500Input } from './dto/update-hfrindiceshfri500.input';

@Injectable()
export class Hfrindiceshfri500Service {
  create(createHfrindiceshfri500Input: CreateHfrindiceshfri500Input) {
    return 'This action adds a new hfrindiceshfri500';
  }

  findAll() {
    return `This action returns all hfrindiceshfri500`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hfrindiceshfri500`;
  }

  update(id: number, updateHfrindiceshfri500Input: UpdateHfrindiceshfri500Input) {
    return `This action updates a #${id} hfrindiceshfri500`;
  }

  remove(id: number) {
    return `This action removes a #${id} hfrindiceshfri500`;
  }
}
