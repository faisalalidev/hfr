import { Injectable } from '@nestjs/common';
import { CreateRmsiteconfigInput } from './dto/create-rmsiteconfig.input';
import { UpdateRmsiteconfigInput } from './dto/update-rmsiteconfig.input';

@Injectable()
export class RmsiteconfigService {
  create(createRmsiteconfigInput: CreateRmsiteconfigInput) {
    return 'This action adds a new rmsiteconfig';
  }

  findAll() {
    return `This action returns all rmsiteconfig`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rmsiteconfig`;
  }

  update(id: number, updateRmsiteconfigInput: UpdateRmsiteconfigInput) {
    return `This action updates a #${id} rmsiteconfig`;
  }

  remove(id: number) {
    return `This action removes a #${id} rmsiteconfig`;
  }
}
