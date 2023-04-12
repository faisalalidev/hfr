import { Module } from '@nestjs/common';
import { HfrxconstituentsService } from './hfrxconstituents.service';
import { HfrxconstituentsResolver } from './hfrxconstituents.resolver';

@Module({
  providers: [HfrxconstituentsResolver, HfrxconstituentsService]
})
export class HfrxconstituentsModule {}
