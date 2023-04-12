import { Test, TestingModule } from '@nestjs/testing';
import { NdxmgrnavResolver } from './ndxmgrnav.resolver';
import { NdxmgrnavService } from './ndxmgrnav.service';

describe('NdxmgrnavResolver', () => {
  let resolver: NdxmgrnavResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NdxmgrnavResolver, NdxmgrnavService],
    }).compile();

    resolver = module.get<NdxmgrnavResolver>(NdxmgrnavResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
