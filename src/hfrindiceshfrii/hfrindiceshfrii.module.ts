import { Module } from '@nestjs/common';
import { HfrindiceshfriiService } from './hfrindiceshfrii.service';
import { HfrindiceshfriiResolver } from './hfrindiceshfrii.resolver';

@Module({
  providers: [HfrindiceshfriiResolver, HfrindiceshfriiService]
})
export class HfrindiceshfriiModule {}
