import { Injectable } from '@nestjs/common';
import { CreateSeopageInput } from './dto/create-seopage.input';
import { UpdateSeopageInput } from './dto/update-seopage.input';

@Injectable()
export class SeopageService {
  create(createSeopageInput: CreateSeopageInput) {
    return 'This action adds a new seopage';
  }

  findAll() {
    return `This action returns all seopage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} seopage`;
  }

  update(id: number, updateSeopageInput: UpdateSeopageInput) {
    return `This action updates a #${id} seopage`;
  }

  remove(id: number) {
    return `This action removes a #${id} seopage`;
  }
}
