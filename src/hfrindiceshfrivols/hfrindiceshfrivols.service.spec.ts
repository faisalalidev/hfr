import { Test, TestingModule } from '@nestjs/testing';
import { HfrindiceshfrivolsService } from './hfrindiceshfrivols.service';

describe('HfrindiceshfrivolsService', () => {
  let service: HfrindiceshfrivolsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HfrindiceshfrivolsService],
    }).compile();

    service = module.get<HfrindiceshfrivolsService>(HfrindiceshfrivolsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
