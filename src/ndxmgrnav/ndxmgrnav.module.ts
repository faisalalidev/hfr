import { Module } from '@nestjs/common';
import { NdxmgrnavService } from './ndxmgrnav.service';
import { NdxmgrnavResolver } from './ndxmgrnav.resolver';

@Module({
  providers: [NdxmgrnavResolver, NdxmgrnavService]
})
export class NdxmgrnavModule {}
