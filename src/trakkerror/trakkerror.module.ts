import { Module } from '@nestjs/common';
import { TrakkerrorService } from './trakkerror.service';
import { TrakkerrorResolver } from './trakkerror.resolver';

@Module({
  providers: [TrakkerrorResolver, TrakkerrorService]
})
export class TrakkerrorModule {}
