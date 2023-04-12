import { Module } from '@nestjs/common';
import { HfrindiceshfriService } from './hfrindiceshfri.service';
import { HfrindiceshfriResolver } from './hfrindiceshfri.resolver';

@Module({
  providers: [HfrindiceshfriResolver, HfrindiceshfriService]
})
export class HfrindiceshfriModule {}
