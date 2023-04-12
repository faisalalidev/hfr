import { Test, TestingModule } from '@nestjs/testing';
import { HfrindiceshfrxdailyService } from './hfrindiceshfrxdaily.service';

describe('HfrindiceshfrxdailyService', () => {
  let service: HfrindiceshfrxdailyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HfrindiceshfrxdailyService],
    }).compile();

    service = module.get<HfrindiceshfrxdailyService>(HfrindiceshfrxdailyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
