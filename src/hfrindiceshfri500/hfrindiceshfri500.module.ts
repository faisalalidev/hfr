import { Module } from '@nestjs/common';
import { Hfrindiceshfri500Service } from './hfrindiceshfri500.service';
import { Hfrindiceshfri500Resolver } from './hfrindiceshfri500.resolver';

@Module({
  providers: [Hfrindiceshfri500Resolver, Hfrindiceshfri500Service]
})
export class Hfrindiceshfri500Module {}
