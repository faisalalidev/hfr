import { Module } from '@nestjs/common';
import { RmsiteconfigService } from './rmsiteconfig.service';
import { RmsiteconfigResolver } from './rmsiteconfig.resolver';

@Module({
  providers: [RmsiteconfigResolver, RmsiteconfigService]
})
export class RmsiteconfigModule {}
