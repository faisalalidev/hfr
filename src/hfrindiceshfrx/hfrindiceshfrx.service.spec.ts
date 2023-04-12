import { Test, TestingModule } from '@nestjs/testing';
import { HfrindiceshfrxService } from './hfrindiceshfrx.service';

describe('HfrindiceshfrxService', () => {
  let service: HfrindiceshfrxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HfrindiceshfrxService],
    }).compile();

    service = module.get<HfrindiceshfrxService>(HfrindiceshfrxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
