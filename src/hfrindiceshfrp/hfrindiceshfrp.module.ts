import { Module } from '@nestjs/common';
import { HfrindiceshfrpService } from './hfrindiceshfrp.service';
import { HfrindiceshfrpResolver } from './hfrindiceshfrp.resolver';

@Module({
  providers: [HfrindiceshfrpResolver, HfrindiceshfrpService]
})
export class HfrindiceshfrpModule {}
