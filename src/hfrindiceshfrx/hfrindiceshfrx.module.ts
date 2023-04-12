import { Module } from '@nestjs/common';
import { HfrindiceshfrxService } from './hfrindiceshfrx.service';
import { HfrindiceshfrxResolver } from './hfrindiceshfrx.resolver';

@Module({
  providers: [HfrindiceshfrxResolver, HfrindiceshfrxService]
})
export class HfrindiceshfrxModule {}
