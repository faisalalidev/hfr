import { Module } from '@nestjs/common';
import { DailyindexperformanceService } from './dailyindexperformance.service';
import { DailyindexperformanceResolver } from './dailyindexperformance.resolver';

@Module({
  providers: [DailyindexperformanceResolver, DailyindexperformanceService]
})
export class DailyindexperformanceModule {}
