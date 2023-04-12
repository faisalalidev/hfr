import { Module } from '@nestjs/common';
import { HfrindiceshfrudailytestService } from './hfrindiceshfrudailytest.service';
import { HfrindiceshfrudailytestResolver } from './hfrindiceshfrudailytest.resolver';

@Module({
  providers: [HfrindiceshfrudailytestResolver, HfrindiceshfrudailytestService]
})
export class HfrindiceshfrudailytestModule {}
