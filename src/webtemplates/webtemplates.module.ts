import { Module } from '@nestjs/common';
import { WebtemplatesService } from './webtemplates.service';
import { WebtemplatesResolver } from './webtemplates.resolver';

@Module({
  providers: [WebtemplatesResolver, WebtemplatesService]
})
export class WebtemplatesModule {}
