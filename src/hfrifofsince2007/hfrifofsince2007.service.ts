import { Injectable } from '@nestjs/common';
import { CreateHfrifofsince2007Input } from './dto/create-hfrifofsince2007.input';
import { UpdateHfrifofsince2007Input } from './dto/update-hfrifofsince2007.input';

@Injectable()
export class Hfrifofsince2007Service {
  create(createHfrifofsince2007Input: CreateHfrifofsince2007Input) {
    return 'This action adds a new hfrifofsince2007';
  }

  findAll() {
    return `This action returns all hfrifofsince2007`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hfrifofsince2007`;
  }

  update(id: number, updateHfrifofsince2007Input: UpdateHfrifofsince2007Input) {
    return `This action updates a #${id} hfrifofsince2007`;
  }

  remove(id: number) {
    return `This action removes a #${id} hfrifofsince2007`;
  }
}
