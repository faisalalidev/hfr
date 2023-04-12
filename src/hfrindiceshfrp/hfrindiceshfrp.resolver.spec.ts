import { Test, TestingModule } from '@nestjs/testing';
import { HfrindiceshfrpResolver } from './hfrindiceshfrp.resolver';
import { HfrindiceshfrpService } from './hfrindiceshfrp.service';

describe('HfrindiceshfrpResolver', () => {
  let resolver: HfrindiceshfrpResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HfrindiceshfrpResolver, HfrindiceshfrpService],
    }).compile();

    resolver = module.get<HfrindiceshfrpResolver>(HfrindiceshfrpResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
