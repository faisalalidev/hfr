import { Test, TestingModule } from '@nestjs/testing';
import { DailyindexperformanceService } from './dailyindexperformance.service';

describe('DailyindexperformanceService', () => {
  let service: DailyindexperformanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DailyindexperformanceService],
    }).compile();

    service = module.get<DailyindexperformanceService>(DailyindexperformanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
