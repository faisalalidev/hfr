import { Module } from '@nestjs/common';
import { HfrindiceshfrrdailyService } from './hfrindiceshfrrdaily.service';
import { HfrindiceshfrrdailyResolver } from './hfrindiceshfrrdaily.resolver';

@Module({
  providers: [HfrindiceshfrrdailyResolver, HfrindiceshfrrdailyService]
})
export class HfrindiceshfrrdailyModule {}
