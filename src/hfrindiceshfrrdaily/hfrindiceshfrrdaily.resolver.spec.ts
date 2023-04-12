import { Test, TestingModule } from '@nestjs/testing';
import { HfrindiceshfrrdailyResolver } from './hfrindiceshfrrdaily.resolver';
import { HfrindiceshfrrdailyService } from './hfrindiceshfrrdaily.service';

describe('HfrindiceshfrrdailyResolver', () => {
  let resolver: HfrindiceshfrrdailyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HfrindiceshfrrdailyResolver, HfrindiceshfrrdailyService],
    }).compile();

    resolver = module.get<HfrindiceshfrrdailyResolver>(HfrindiceshfrrdailyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
