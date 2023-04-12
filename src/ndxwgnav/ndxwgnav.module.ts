import { Module } from '@nestjs/common';
import { NdxwgnavService } from './ndxwgnav.service';
import { NdxwgnavResolver } from './ndxwgnav.resolver';

@Module({
  providers: [NdxwgnavResolver, NdxwgnavService]
})
export class NdxwgnavModule {}
