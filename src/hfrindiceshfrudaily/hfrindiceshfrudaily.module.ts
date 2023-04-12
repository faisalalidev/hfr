import { Module } from '@nestjs/common';
import { HfrindiceshfrudailyService } from './hfrindiceshfrudaily.service';
import { HfrindiceshfrudailyResolver } from './hfrindiceshfrudaily.resolver';

@Module({
  providers: [HfrindiceshfrudailyResolver, HfrindiceshfrudailyService]
})
export class HfrindiceshfrudailyModule {}
