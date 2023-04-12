import { Test, TestingModule } from '@nestjs/testing';
import { HfrindiceshfrxResolver } from './hfrindiceshfrx.resolver';
import { HfrindiceshfrxService } from './hfrindiceshfrx.service';

describe('HfrindiceshfrxResolver', () => {
  let resolver: HfrindiceshfrxResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HfrindiceshfrxResolver, HfrindiceshfrxService],
    }).compile();

    resolver = module.get<HfrindiceshfrxResolver>(HfrindiceshfrxResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
