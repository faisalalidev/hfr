import { Injectable } from '@nestjs/common';
import { CreateDailyindexperformanceInput } from './dto/create-dailyindexperformance.input';
import { UpdateDailyindexperformanceInput } from './dto/update-dailyindexperformance.input';

@Injectable()
export class DailyindexperformanceService {
  create(createDailyindexperformanceInput: CreateDailyindexperformanceInput) {
    return 'This action adds a new dailyindexperformance';
  }

  findAll() {
    return `This action returns all dailyindexperformance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dailyindexperformance`;
  }

  update(id: number, updateDailyindexperformanceInput: UpdateDailyindexperformanceInput) {
    return `This action updates a #${id} dailyindexperformance`;
  }

  remove(id: number) {
    return `This action removes a #${id} dailyindexperformance`;
  }
}
