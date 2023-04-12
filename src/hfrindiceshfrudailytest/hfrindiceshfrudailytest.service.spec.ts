import { Test, TestingModule } from '@nestjs/testing';
import { HfrindiceshfrudailytestService } from './hfrindiceshfrudailytest.service';

describe('HfrindiceshfrudailytestService', () => {
  let service: HfrindiceshfrudailytestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HfrindiceshfrudailytestService],
    }).compile();

    service = module.get<HfrindiceshfrudailytestService>(HfrindiceshfrudailytestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
