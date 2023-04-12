import { CreateDailyindexperformanceInput } from './create-dailyindexperformance.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateDailyindexperformanceInput extends PartialType(CreateDailyindexperformanceInput) {
  id: number;
}
