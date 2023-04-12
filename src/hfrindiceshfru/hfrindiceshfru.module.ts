import { Module } from '@nestjs/common';
import { HfrindiceshfruService } from './hfrindiceshfru.service';
import { HfrindiceshfruResolver } from './hfrindiceshfru.resolver';

@Module({
  providers: [HfrindiceshfruResolver, HfrindiceshfruService]
})
export class HfrindiceshfruModule {}
