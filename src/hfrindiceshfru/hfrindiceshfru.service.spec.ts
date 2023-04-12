import { Test, TestingModule } from '@nestjs/testing';
import { HfrindiceshfruService } from './hfrindiceshfru.service';

describe('HfrindiceshfruService', () => {
  let service: HfrindiceshfruService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HfrindiceshfruService],
    }).compile();

    service = module.get<HfrindiceshfruService>(HfrindiceshfruService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
