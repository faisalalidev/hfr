import { Injectable } from '@nestjs/common';
import { CreateHfrifwcsince2007Input } from './dto/create-hfrifwcsince2007.input';
import { UpdateHfrifwcsince2007Input } from './dto/update-hfrifwcsince2007.input';

@Injectable()
export class Hfrifwcsince2007Service {
  create(createHfrifwcsince2007Input: CreateHfrifwcsince2007Input) {
    return 'This action adds a new hfrifwcsince2007';
  }

  findAll() {
    return `This action returns all hfrifwcsince2007`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hfrifwcsince2007`;
  }

  update(id: number, updateHfrifwcsince2007Input: UpdateHfrifwcsince2007Input) {
    return `This action updates a #${id} hfrifwcsince2007`;
  }

  remove(id: number) {
    return `This action removes a #${id} hfrifwcsince2007`;
  }
}
