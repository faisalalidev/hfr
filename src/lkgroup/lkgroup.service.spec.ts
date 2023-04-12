import { Test, TestingModule } from '@nestjs/testing';
import { LkgroupService } from './lkgroup.service';

describe('LkgroupService', () => {
  let service: LkgroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LkgroupService],
    }).compile();

    service = module.get<LkgroupService>(LkgroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
