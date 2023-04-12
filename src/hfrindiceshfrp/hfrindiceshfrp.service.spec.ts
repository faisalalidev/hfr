import { Test, TestingModule } from '@nestjs/testing';
import { HfrindiceshfrpService } from './hfrindiceshfrp.service';

describe('HfrindiceshfrpService', () => {
  let service: HfrindiceshfrpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HfrindiceshfrpService],
    }).compile();

    service = module.get<HfrindiceshfrpService>(HfrindiceshfrpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
