import { Test, TestingModule } from '@nestjs/testing';
import { HfrindiceshfrbResolver } from './hfrindiceshfrb.resolver';
import { HfrindiceshfrbService } from './hfrindiceshfrb.service';

describe('HfrindiceshfrbResolver', () => {
  let resolver: HfrindiceshfrbResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HfrindiceshfrbResolver, HfrindiceshfrbService],
    }).compile();

    resolver = module.get<HfrindiceshfrbResolver>(HfrindiceshfrbResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
