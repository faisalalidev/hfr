import { Test, TestingModule } from '@nestjs/testing';
import { HfrindiceshfriidailyService } from './hfrindiceshfriidaily.service';

describe('HfrindiceshfriidailyService', () => {
  let service: HfrindiceshfriidailyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HfrindiceshfriidailyService],
    }).compile();

    service = module.get<HfrindiceshfriidailyService>(HfrindiceshfriidailyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
