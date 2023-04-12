import { Test, TestingModule } from '@nestjs/testing';
import { HfrindiceshfradailyService } from './hfrindiceshfradaily.service';

describe('HfrindiceshfradailyService', () => {
  let service: HfrindiceshfradailyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HfrindiceshfradailyService],
    }).compile();

    service = module.get<HfrindiceshfradailyService>(HfrindiceshfradailyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
