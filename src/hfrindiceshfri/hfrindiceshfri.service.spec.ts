import { Test, TestingModule } from '@nestjs/testing';
import { HfrindiceshfriService } from './hfrindiceshfri.service';

describe('HfrindiceshfriService', () => {
  let service: HfrindiceshfriService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HfrindiceshfriService],
    }).compile();

    service = module.get<HfrindiceshfriService>(HfrindiceshfriService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
