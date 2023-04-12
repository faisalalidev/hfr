import { Injectable } from '@nestjs/common';
import { CreateLkgroupInput } from './dto/create-lkgroup.input';
import { UpdateLkgroupInput } from './dto/update-lkgroup.input';

@Injectable()
export class LkgroupService {
  create(createLkgroupInput: CreateLkgroupInput) {
    return 'This action adds a new lkgroup';
  }

  findAll() {
    return `This action returns all lkgroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lkgroup`;
  }

  update(id: number, updateLkgroupInput: UpdateLkgroupInput) {
    return `This action updates a #${id} lkgroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} lkgroup`;
  }
}
