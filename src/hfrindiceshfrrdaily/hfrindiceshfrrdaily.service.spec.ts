import { Test, TestingModule } from '@nestjs/testing';
import { HfrindiceshfrrdailyService } from './hfrindiceshfrrdaily.service';

describe('HfrindiceshfrrdailyService', () => {
  let service: HfrindiceshfrrdailyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HfrindiceshfrrdailyService],
    }).compile();

    service = module.get<HfrindiceshfrrdailyService>(HfrindiceshfrrdailyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
