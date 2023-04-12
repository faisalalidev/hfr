import { Injectable } from '@nestjs/common';
import { CreateHfrindiceshfriinstInput } from './dto/create-hfrindiceshfriinst.input';
import { UpdateHfrindiceshfriinstInput } from './dto/update-hfrindiceshfriinst.input';

@Injectable()
export class HfrindiceshfriinstService {
  create(createHfrindiceshfriinstInput: CreateHfrindiceshfriinstInput) {
    return 'This action adds a new hfrindiceshfriinst';
  }

  findAll() {
    return `This action returns all hfrindiceshfriinst`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hfrindiceshfriinst`;
  }

  update(id: number, updateHfrindiceshfriinstInput: UpdateHfrindiceshfriinstInput) {
    return `This action updates a #${id} hfrindiceshfriinst`;
  }

  remove(id: number) {
    return `This action removes a #${id} hfrindiceshfriinst`;
  }
}
