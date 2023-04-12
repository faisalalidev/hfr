import { Module } from '@nestjs/common';
import { HfrindiceshfraService } from './hfrindiceshfra.service';
import { HfrindiceshfraResolver } from './hfrindiceshfra.resolver';

@Module({
  providers: [HfrindiceshfraResolver, HfrindiceshfraService]
})
export class HfrindiceshfraModule {}
