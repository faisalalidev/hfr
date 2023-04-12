import { Test, TestingModule } from '@nestjs/testing';
import { Hfrifofsince2007Resolver } from './hfrifofsince2007.resolver';
import { Hfrifofsince2007Service } from './hfrifofsince2007.service';

describe('Hfrifofsince2007Resolver', () => {
  let resolver: Hfrifofsince2007Resolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Hfrifofsince2007Resolver, Hfrifofsince2007Service],
    }).compile();

    resolver = module.get<Hfrifofsince2007Resolver>(Hfrifofsince2007Resolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
