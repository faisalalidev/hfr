import { Test, TestingModule } from '@nestjs/testing';
import { HfrindiceshfrbService } from './hfrindiceshfrb.service';

describe('HfrindiceshfrbService', () => {
  let service: HfrindiceshfrbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HfrindiceshfrbService],
    }).compile();

    service = module.get<HfrindiceshfrbService>(HfrindiceshfrbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
