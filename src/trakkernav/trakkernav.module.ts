import { Module } from '@nestjs/common';
import { TrakkernavService } from './trakkernav.service';
import { TrakkernavResolver } from './trakkernav.resolver';

@Module({
  providers: [TrakkernavResolver, TrakkernavService]
})
export class TrakkernavModule {}
