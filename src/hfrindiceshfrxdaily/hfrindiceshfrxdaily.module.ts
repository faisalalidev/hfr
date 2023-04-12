import { Module } from '@nestjs/common';
import { HfrindiceshfrxdailyService } from './hfrindiceshfrxdaily.service';
import { HfrindiceshfrxdailyResolver } from './hfrindiceshfrxdaily.resolver';

@Module({
  providers: [HfrindiceshfrxdailyResolver, HfrindiceshfrxdailyService]
})
export class HfrindiceshfrxdailyModule {}
