import { Module } from '@nestjs/common';
import { HfrindiceshfradailyService } from './hfrindiceshfradaily.service';
import { HfrindiceshfradailyResolver } from './hfrindiceshfradaily.resolver';

@Module({
  providers: [HfrindiceshfradailyResolver, HfrindiceshfradailyService]
})
export class HfrindiceshfradailyModule {}
