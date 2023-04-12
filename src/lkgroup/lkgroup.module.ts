import { Module } from '@nestjs/common';
import { LkgroupService } from './lkgroup.service';
import { LkgroupResolver } from './lkgroup.resolver';

@Module({
  providers: [LkgroupResolver, LkgroupService]
})
export class LkgroupModule {}
