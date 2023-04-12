import { Test, TestingModule } from '@nestjs/testing';
import { HfrindiceshfrrResolver } from './hfrindiceshfrr.resolver';
import { HfrindiceshfrrService } from './hfrindiceshfrr.service';

describe('HfrindiceshfrrResolver', () => {
  let resolver: HfrindiceshfrrResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HfrindiceshfrrResolver, HfrindiceshfrrService],
    }).compile();

    resolver = module.get<HfrindiceshfrrResolver>(HfrindiceshfrrResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
