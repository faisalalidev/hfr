import { Test, TestingModule } from '@nestjs/testing';
import { HfrindiceshfradailyResolver } from './hfrindiceshfradaily.resolver';
import { HfrindiceshfradailyService } from './hfrindiceshfradaily.service';

describe('HfrindiceshfradailyResolver', () => {
  let resolver: HfrindiceshfradailyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HfrindiceshfradailyResolver, HfrindiceshfradailyService],
    }).compile();

    resolver = module.get<HfrindiceshfradailyResolver>(HfrindiceshfradailyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
