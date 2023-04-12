import { Module } from '@nestjs/common';
import { HfrindiceshfrivolsService } from './hfrindiceshfrivols.service';
import { HfrindiceshfrivolsResolver } from './hfrindiceshfrivols.resolver';

@Module({
  providers: [HfrindiceshfrivolsResolver, HfrindiceshfrivolsService]
})
export class HfrindiceshfrivolsModule {}
