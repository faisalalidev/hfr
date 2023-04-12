import { Module } from '@nestjs/common';
import { LkuserdocService } from './lkuserdoc.service';
import { LkuserdocResolver } from './lkuserdoc.resolver';

@Module({
  providers: [LkuserdocResolver, LkuserdocService]
})
export class LkuserdocModule {}
