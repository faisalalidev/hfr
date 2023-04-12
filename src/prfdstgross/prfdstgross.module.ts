import { Module } from '@nestjs/common';
import { PrfdstgrossService } from './prfdstgross.service';
import { PrfdstgrossResolver } from './prfdstgross.resolver';

@Module({
  providers: [PrfdstgrossResolver, PrfdstgrossService]
})
export class PrfdstgrossModule {}
