import { Injectable } from '@nestjs/common';
import { CreateDailyhfrxperformanceInput } from './dto/create-dailyhfrxperformance.input';
import { UpdateDailyhfrxperformanceInput } from './dto/update-dailyhfrxperformance.input';

@Injectable()
export class DailyhfrxperformanceService {
  create(createDailyhfrxperformanceInput: CreateDailyhfrxperformanceInput) {
    return 'This action adds a new dailyhfrxperformance';
  }

  findAll() {
    return `This action returns all dailyhfrxperformance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dailyhfrxperformance`;
  }

  update(id: number, updateDailyhfrxperformanceInput: UpdateDailyhfrxperformanceInput) {
    return `This action updates a #${id} dailyhfrxperformance`;
  }

  remove(id: number) {
    return `This action removes a #${id} dailyhfrxperformance`;
  }
}
