import { Test, TestingModule } from '@nestjs/testing';
import { HfrindiceshfriinstResolver } from './hfrindiceshfriinst.resolver';
import { HfrindiceshfriinstService } from './hfrindiceshfriinst.service';

describe('HfrindiceshfriinstResolver', () => {
  let resolver: HfrindiceshfriinstResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HfrindiceshfriinstResolver, HfrindiceshfriinstService],
    }).compile();

    resolver = module.get<HfrindiceshfriinstResolver>(HfrindiceshfriinstResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
