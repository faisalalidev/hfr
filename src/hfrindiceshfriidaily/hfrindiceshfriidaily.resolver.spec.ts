import { Test, TestingModule } from '@nestjs/testing';
import { HfrindiceshfriidailyResolver } from './hfrindiceshfriidaily.resolver';
import { HfrindiceshfriidailyService } from './hfrindiceshfriidaily.service';

describe('HfrindiceshfriidailyResolver', () => {
  let resolver: HfrindiceshfriidailyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HfrindiceshfriidailyResolver, HfrindiceshfriidailyService],
    }).compile();

    resolver = module.get<HfrindiceshfriidailyResolver>(HfrindiceshfriidailyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
