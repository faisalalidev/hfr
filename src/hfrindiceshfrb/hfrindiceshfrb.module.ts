import { Module } from '@nestjs/common';
import { HfrindiceshfrbService } from './hfrindiceshfrb.service';
import { HfrindiceshfrbResolver } from './hfrindiceshfrb.resolver';

@Module({
  providers: [HfrindiceshfrbResolver, HfrindiceshfrbService]
})
export class HfrindiceshfrbModule {}
