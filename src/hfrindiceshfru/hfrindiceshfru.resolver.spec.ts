import { Test, TestingModule } from '@nestjs/testing';
import { HfrindiceshfruResolver } from './hfrindiceshfru.resolver';
import { HfrindiceshfruService } from './hfrindiceshfru.service';

describe('HfrindiceshfruResolver', () => {
  let resolver: HfrindiceshfruResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HfrindiceshfruResolver, HfrindiceshfruService],
    }).compile();

    resolver = module.get<HfrindiceshfruResolver>(HfrindiceshfruResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
