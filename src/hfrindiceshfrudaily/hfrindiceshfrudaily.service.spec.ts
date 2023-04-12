import { Test, TestingModule } from '@nestjs/testing';
import { HfrindiceshfrudailyService } from './hfrindiceshfrudaily.service';

describe('HfrindiceshfrudailyService', () => {
  let service: HfrindiceshfrudailyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HfrindiceshfrudailyService],
    }).compile();

    service = module.get<HfrindiceshfrudailyService>(HfrindiceshfrudailyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
