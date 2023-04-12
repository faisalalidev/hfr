import { Module } from '@nestjs/common';
import { Hfrifofsince2007Service } from './hfrifofsince2007.service';
import { Hfrifofsince2007Resolver } from './hfrifofsince2007.resolver';

@Module({
  providers: [Hfrifofsince2007Resolver, Hfrifofsince2007Service]
})
export class Hfrifofsince2007Module {}
