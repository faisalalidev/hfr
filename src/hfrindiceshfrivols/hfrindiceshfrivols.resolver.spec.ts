import { Test, TestingModule } from '@nestjs/testing';
import { HfrindiceshfrivolsResolver } from './hfrindiceshfrivols.resolver';
import { HfrindiceshfrivolsService } from './hfrindiceshfrivols.service';

describe('HfrindiceshfrivolsResolver', () => {
  let resolver: HfrindiceshfrivolsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HfrindiceshfrivolsResolver, HfrindiceshfrivolsService],
    }).compile();

    resolver = module.get<HfrindiceshfrivolsResolver>(HfrindiceshfrivolsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
