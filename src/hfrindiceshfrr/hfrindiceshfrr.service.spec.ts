import { Test, TestingModule } from '@nestjs/testing';
import { HfrindiceshfrrService } from './hfrindiceshfrr.service';

describe('HfrindiceshfrrService', () => {
  let service: HfrindiceshfrrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HfrindiceshfrrService],
    }).compile();

    service = module.get<HfrindiceshfrrService>(HfrindiceshfrrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
