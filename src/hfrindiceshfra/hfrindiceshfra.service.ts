import { Injectable } from '@nestjs/common';
import { CreateHfrindiceshfraInput } from './dto/create-hfrindiceshfra.input';
import { UpdateHfrindiceshfraInput } from './dto/update-hfrindiceshfra.input';

@Injectable()
export class HfrindiceshfraService {
  create(createHfrindiceshfraInput: CreateHfrindiceshfraInput) {
    return 'This action adds a new hfrindiceshfra';
  }

  findAll() {
    return `This action returns all hfrindiceshfra`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hfrindiceshfra`;
  }

  update(id: number, updateHfrindiceshfraInput: UpdateHfrindiceshfraInput) {
    return `This action updates a #${id} hfrindiceshfra`;
  }

  remove(id: number) {
    return `This action removes a #${id} hfrindiceshfra`;
  }
}
