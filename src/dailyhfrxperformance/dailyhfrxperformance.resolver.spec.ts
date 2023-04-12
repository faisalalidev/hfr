import { Test, TestingModule } from '@nestjs/testing';
import { DailyhfrxperformanceResolver } from './dailyhfrxperformance.resolver';
import { DailyhfrxperformanceService } from './dailyhfrxperformance.service';

describe('DailyhfrxperformanceResolver', () => {
  let resolver: DailyhfrxperformanceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DailyhfrxperformanceResolver, DailyhfrxperformanceService],
    }).compile();

    resolver = module.get<DailyhfrxperformanceResolver>(DailyhfrxperformanceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
