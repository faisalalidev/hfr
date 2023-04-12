import { Test, TestingModule } from '@nestjs/testing';
import { SeopageResolver } from './seopage.resolver';
import { SeopageService } from './seopage.service';

describe('SeopageResolver', () => {
  let resolver: SeopageResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeopageResolver, SeopageService],
    }).compile();

    resolver = module.get<SeopageResolver>(SeopageResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
