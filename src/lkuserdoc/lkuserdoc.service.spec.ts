import { Test, TestingModule } from '@nestjs/testing';
import { LkuserdocService } from './lkuserdoc.service';

describe('LkuserdocService', () => {
  let service: LkuserdocService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LkuserdocService],
    }).compile();

    service = module.get<LkuserdocService>(LkuserdocService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
