import { CreateDailyhfrxperformanceInput } from './create-dailyhfrxperformance.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateDailyhfrxperformanceInput extends PartialType(CreateDailyhfrxperformanceInput) {
  id: number;
}
