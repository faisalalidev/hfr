import { Test, TestingModule } from '@nestjs/testing';
import { DailyindexperformanceResolver } from './dailyindexperformance.resolver';
import { DailyindexperformanceService } from './dailyindexperformance.service';

describe('DailyindexperformanceResolver', () => {
  let resolver: DailyindexperformanceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DailyindexperformanceResolver, DailyindexperformanceService],
    }).compile();

    resolver = module.get<DailyindexperformanceResolver>(DailyindexperformanceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
