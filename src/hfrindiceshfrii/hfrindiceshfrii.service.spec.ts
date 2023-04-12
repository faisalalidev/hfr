import { Test, TestingModule } from '@nestjs/testing';
import { HfrindiceshfriiService } from './hfrindiceshfrii.service';

describe('HfrindiceshfriiService', () => {
  let service: HfrindiceshfriiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HfrindiceshfriiService],
    }).compile();

    service = module.get<HfrindiceshfriiService>(HfrindiceshfriiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
