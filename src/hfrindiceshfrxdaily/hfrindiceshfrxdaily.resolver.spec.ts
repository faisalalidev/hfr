import { Test, TestingModule } from '@nestjs/testing';
import { HfrindiceshfrxdailyResolver } from './hfrindiceshfrxdaily.resolver';
import { HfrindiceshfrxdailyService } from './hfrindiceshfrxdaily.service';

describe('HfrindiceshfrxdailyResolver', () => {
  let resolver: HfrindiceshfrxdailyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HfrindiceshfrxdailyResolver, HfrindiceshfrxdailyService],
    }).compile();

    resolver = module.get<HfrindiceshfrxdailyResolver>(HfrindiceshfrxdailyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
