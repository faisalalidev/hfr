import { Test, TestingModule } from '@nestjs/testing';
import { HfrindiceshfrudailyResolver } from './hfrindiceshfrudaily.resolver';
import { HfrindiceshfrudailyService } from './hfrindiceshfrudaily.service';

describe('HfrindiceshfrudailyResolver', () => {
  let resolver: HfrindiceshfrudailyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HfrindiceshfrudailyResolver, HfrindiceshfrudailyService],
    }).compile();

    resolver = module.get<HfrindiceshfrudailyResolver>(HfrindiceshfrudailyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
