import { Test, TestingModule } from '@nestjs/testing';
import { HfrindiceshfraResolver } from './hfrindiceshfra.resolver';
import { HfrindiceshfraService } from './hfrindiceshfra.service';

describe('HfrindiceshfraResolver', () => {
  let resolver: HfrindiceshfraResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HfrindiceshfraResolver, HfrindiceshfraService],
    }).compile();

    resolver = module.get<HfrindiceshfraResolver>(HfrindiceshfraResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
