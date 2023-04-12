import { Test, TestingModule } from '@nestjs/testing';
import { HfrindiceshfriResolver } from './hfrindiceshfri.resolver';
import { HfrindiceshfriService } from './hfrindiceshfri.service';

describe('HfrindiceshfriResolver', () => {
  let resolver: HfrindiceshfriResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HfrindiceshfriResolver, HfrindiceshfriService],
    }).compile();

    resolver = module.get<HfrindiceshfriResolver>(HfrindiceshfriResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
