import { Test, TestingModule } from '@nestjs/testing';
import { Hfrifwcsince2007Resolver } from './hfrifwcsince2007.resolver';
import { Hfrifwcsince2007Service } from './hfrifwcsince2007.service';

describe('Hfrifwcsince2007Resolver', () => {
  let resolver: Hfrifwcsince2007Resolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Hfrifwcsince2007Resolver, Hfrifwcsince2007Service],
    }).compile();

    resolver = module.get<Hfrifwcsince2007Resolver>(Hfrifwcsince2007Resolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
