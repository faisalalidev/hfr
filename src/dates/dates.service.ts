import { Injectable } from '@nestjs/common';
import { CreateDateInput } from './dto/create-date.input';
import { UpdateDateInput } from './dto/update-date.input';

@Injectable()
export class DatesService {
  create(createDateInput: CreateDateInput) {
    return 'This action adds a new date';
  }

  findAll() {
    return `This action returns all dates`;
  }

  findOne(id: number) {
    return `This action returns a #${id} date`;
  }

  update(id: number, updateDateInput: UpdateDateInput) {
    return `This action updates a #${id} date`;
  }

  remove(id: number) {
    return `This action removes a #${id} date`;
  }
}
