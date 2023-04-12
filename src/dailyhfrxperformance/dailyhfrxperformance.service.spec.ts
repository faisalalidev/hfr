import { Test, TestingModule } from '@nestjs/testing';
import { DailyhfrxperformanceService } from './dailyhfrxperformance.service';

describe('DailyhfrxperformanceService', () => {
  let service: DailyhfrxperformanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DailyhfrxperformanceService],
    }).compile();

    service = module.get<DailyhfrxperformanceService>(DailyhfrxperformanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
