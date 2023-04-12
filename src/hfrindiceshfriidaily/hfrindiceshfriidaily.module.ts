import { Module } from '@nestjs/common';
import { HfrindiceshfriidailyService } from './hfrindiceshfriidaily.service';
import { HfrindiceshfriidailyResolver } from './hfrindiceshfriidaily.resolver';

@Module({
  providers: [HfrindiceshfriidailyResolver, HfrindiceshfriidailyService]
})
export class HfrindiceshfriidailyModule {}
