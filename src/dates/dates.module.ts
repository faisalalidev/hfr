import { Module } from '@nestjs/common';
import { DatesService } from './dates.service';
import { DatesResolver } from './dates.resolver';

@Module({
  providers: [DatesResolver, DatesService]
})
export class DatesModule {}
