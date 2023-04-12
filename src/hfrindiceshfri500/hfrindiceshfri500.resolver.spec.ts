import { Test, TestingModule } from '@nestjs/testing';
import { Hfrindiceshfri500Resolver } from './hfrindiceshfri500.resolver';
import { Hfrindiceshfri500Service } from './hfrindiceshfri500.service';

describe('Hfrindiceshfri500Resolver', () => {
  let resolver: Hfrindiceshfri500Resolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Hfrindiceshfri500Resolver, Hfrindiceshfri500Service],
    }).compile();

    resolver = module.get<Hfrindiceshfri500Resolver>(Hfrindiceshfri500Resolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
