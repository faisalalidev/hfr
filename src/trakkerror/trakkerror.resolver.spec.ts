import { Test, TestingModule } from '@nestjs/testing';
import { TrakkerrorResolver } from './trakkerror.resolver';
import { TrakkerrorService } from './trakkerror.service';

describe('TrakkerrorResolver', () => {
  let resolver: TrakkerrorResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrakkerrorResolver, TrakkerrorService],
    }).compile();

    resolver = module.get<TrakkerrorResolver>(TrakkerrorResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
