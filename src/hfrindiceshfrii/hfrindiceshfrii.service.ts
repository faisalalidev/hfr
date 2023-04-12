import { Injectable } from '@nestjs/common';
import { CreateHfrindiceshfriiInput } from './dto/create-hfrindiceshfrii.input';
import { UpdateHfrindiceshfriiInput } from './dto/update-hfrindiceshfrii.input';

@Injectable()
export class HfrindiceshfriiService {
  create(createHfrindiceshfriiInput: CreateHfrindiceshfriiInput) {
    return 'This action adds a new hfrindiceshfrii';
  }

  findAll() {
    return `This action returns all hfrindiceshfrii`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hfrindiceshfrii`;
  }

  update(id: number, updateHfrindiceshfriiInput: UpdateHfrindiceshfriiInput) {
    return `This action updates a #${id} hfrindiceshfrii`;
  }

  remove(id: number) {
    return `This action removes a #${id} hfrindiceshfrii`;
  }
}
