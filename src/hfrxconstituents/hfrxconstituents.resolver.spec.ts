import { Test, TestingModule } from '@nestjs/testing';
import { HfrxconstituentsResolver } from './hfrxconstituents.resolver';
import { HfrxconstituentsService } from './hfrxconstituents.service';

describe('HfrxconstituentsResolver', () => {
  let resolver: HfrxconstituentsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HfrxconstituentsResolver, HfrxconstituentsService],
    }).compile();

    resolver = module.get<HfrxconstituentsResolver>(HfrxconstituentsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
