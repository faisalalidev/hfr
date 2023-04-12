import { Module } from '@nestjs/common';
import { HfrindiceshfrrService } from './hfrindiceshfrr.service';
import { HfrindiceshfrrResolver } from './hfrindiceshfrr.resolver';

@Module({
  providers: [HfrindiceshfrrResolver, HfrindiceshfrrService]
})
export class HfrindiceshfrrModule {}
