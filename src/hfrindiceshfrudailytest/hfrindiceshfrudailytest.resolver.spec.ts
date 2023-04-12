import { Test, TestingModule } from '@nestjs/testing';
import { HfrindiceshfrudailytestResolver } from './hfrindiceshfrudailytest.resolver';
import { HfrindiceshfrudailytestService } from './hfrindiceshfrudailytest.service';

describe('HfrindiceshfrudailytestResolver', () => {
  let resolver: HfrindiceshfrudailytestResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HfrindiceshfrudailytestResolver, HfrindiceshfrudailytestService],
    }).compile();

    resolver = module.get<HfrindiceshfrudailytestResolver>(HfrindiceshfrudailytestResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
