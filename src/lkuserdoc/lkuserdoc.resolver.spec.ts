import { Test, TestingModule } from '@nestjs/testing';
import { LkuserdocResolver } from './lkuserdoc.resolver';
import { LkuserdocService } from './lkuserdoc.service';

describe('LkuserdocResolver', () => {
  let resolver: LkuserdocResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LkuserdocResolver, LkuserdocService],
    }).compile();

    resolver = module.get<LkuserdocResolver>(LkuserdocResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
