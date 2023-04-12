import { Module } from '@nestjs/common';
import { DailyhfrxperformanceService } from './dailyhfrxperformance.service';
import { DailyhfrxperformanceResolver } from './dailyhfrxperformance.resolver';

@Module({
  providers: [DailyhfrxperformanceResolver, DailyhfrxperformanceService]
})
export class DailyhfrxperformanceModule {}
