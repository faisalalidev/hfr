import { Injectable } from '@nestjs/common';
import { CreateTrakkerrorInput } from './dto/create-trakkerror.input';
import { UpdateTrakkerrorInput } from './dto/update-trakkerror.input';

@Injectable()
export class TrakkerrorService {
  create(createTrakkerrorInput: CreateTrakkerrorInput) {
    return 'This action adds a new trakkerror';
  }

  findAll() {
    return `This action returns all trakkerror`;
  }

  findOne(id: number) {
    return `This action returns a #${id} trakkerror`;
  }

  update(id: number, updateTrakkerrorInput: UpdateTrakkerrorInput) {
    return `This action updates a #${id} trakkerror`;
  }

  remove(id: number) {
    return `This action removes a #${id} trakkerror`;
  }
}
