import { Test, TestingModule } from '@nestjs/testing';
import { NdxwgnavResolver } from './ndxwgnav.resolver';
import { NdxwgnavService } from './ndxwgnav.service';

describe('NdxwgnavResolver', () => {
  let resolver: NdxwgnavResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NdxwgnavResolver, NdxwgnavService],
    }).compile();

    resolver = module.get<NdxwgnavResolver>(NdxwgnavResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
