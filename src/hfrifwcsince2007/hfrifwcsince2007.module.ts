import { Module } from '@nestjs/common';
import { Hfrifwcsince2007Service } from './hfrifwcsince2007.service';
import { Hfrifwcsince2007Resolver } from './hfrifwcsince2007.resolver';

@Module({
  providers: [Hfrifwcsince2007Resolver, Hfrifwcsince2007Service]
})
export class Hfrifwcsince2007Module {}
