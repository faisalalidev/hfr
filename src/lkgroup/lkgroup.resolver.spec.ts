import { Test, TestingModule } from '@nestjs/testing';
import { LkgroupResolver } from './lkgroup.resolver';
import { LkgroupService } from './lkgroup.service';

describe('LkgroupResolver', () => {
  let resolver: LkgroupResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LkgroupResolver, LkgroupService],
    }).compile();

    resolver = module.get<LkgroupResolver>(LkgroupResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
