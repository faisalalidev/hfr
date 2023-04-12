import { Injectable } from '@nestjs/common';
import { CreateTrakkernavInput } from './dto/create-trakkernav.input';
import { UpdateTrakkernavInput } from './dto/update-trakkernav.input';

@Injectable()
export class TrakkernavService {
  create(createTrakkernavInput: CreateTrakkernavInput) {
    return 'This action adds a new trakkernav';
  }

  findAll() {
    return `This action returns all trakkernav`;
  }

  findOne(id: number) {
    return `This action returns a #${id} trakkernav`;
  }

  update(id: number, updateTrakkernavInput: UpdateTrakkernavInput) {
    return `This action updates a #${id} trakkernav`;
  }

  remove(id: number) {
    return `This action removes a #${id} trakkernav`;
  }
}
