import { Module } from '@nestjs/common';
import { SeopageService } from './seopage.service';
import { SeopageResolver } from './seopage.resolver';

@Module({
  providers: [SeopageResolver, SeopageService]
})
export class SeopageModule {}
