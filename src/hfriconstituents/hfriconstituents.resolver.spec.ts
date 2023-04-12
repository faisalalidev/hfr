import { Test, TestingModule } from '@nestjs/testing';
import { HfriconstituentsResolver } from './hfriconstituents.resolver';
import { HfriconstituentsService } from './hfriconstituents.service';

describe('HfriconstituentsResolver', () => {
  let resolver: HfriconstituentsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HfriconstituentsResolver, HfriconstituentsService],
    }).compile();

    resolver = module.get<HfriconstituentsResolver>(HfriconstituentsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
