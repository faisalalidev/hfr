import { Injectable } from '@nestjs/common';
import { CreateWebtemplateInput } from './dto/create-webtemplate.input';
import { UpdateWebtemplateInput } from './dto/update-webtemplate.input';

@Injectable()
export class WebtemplatesService {
  create(createWebtemplateInput: CreateWebtemplateInput) {
    return 'This action adds a new webtemplate';
  }

  findAll() {
    return `This action returns all webtemplates`;
  }

  findOne(id: number) {
    return `This action returns a #${id} webtemplate`;
  }

  update(id: number, updateWebtemplateInput: UpdateWebtemplateInput) {
    return `This action updates a #${id} webtemplate`;
  }

  remove(id: number) {
    return `This action removes a #${id} webtemplate`;
  }
}
