import { Module } from '@nestjs/common';
import { HfrindiceshfriinstService } from './hfrindiceshfriinst.service';
import { HfrindiceshfriinstResolver } from './hfrindiceshfriinst.resolver';

@Module({
  providers: [HfrindiceshfriinstResolver, HfrindiceshfriinstService]
})
export class HfrindiceshfriinstModule {}
