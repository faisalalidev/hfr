import { Module } from '@nestjs/common';
import { HfriconstituentsService } from './hfriconstituents.service';
import { HfriconstituentsResolver } from './hfriconstituents.resolver';

@Module({
  providers: [HfriconstituentsResolver, HfriconstituentsService]
})
export class HfriconstituentsModule {}
