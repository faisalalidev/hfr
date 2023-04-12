import { Test, TestingModule } from '@nestjs/testing';
import { HfrindiceshfriiResolver } from './hfrindiceshfrii.resolver';
import { HfrindiceshfriiService } from './hfrindiceshfrii.service';

describe('HfrindiceshfriiResolver', () => {
  let resolver: HfrindiceshfriiResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HfrindiceshfriiResolver, HfrindiceshfriiService],
    }).compile();

    resolver = module.get<HfrindiceshfriiResolver>(HfrindiceshfriiResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
