import { Test, TestingModule } from '@nestjs/testing';
import { HfrindiceshfraService } from './hfrindiceshfra.service';

describe('HfrindiceshfraService', () => {
  let service: HfrindiceshfraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HfrindiceshfraService],
    }).compile();

    service = module.get<HfrindiceshfraService>(HfrindiceshfraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
