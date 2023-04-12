import { Module } from '@nestjs/common';
import { InstrumentsService } from './instruments.service';
import { InstrumentsResolver } from './instruments.resolver';

@Module({
  providers: [InstrumentsResolver, InstrumentsService]
})
export class InstrumentsModule {}
