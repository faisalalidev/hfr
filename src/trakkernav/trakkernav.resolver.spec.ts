import { Test, TestingModule } from '@nestjs/testing';
import { TrakkernavResolver } from './trakkernav.resolver';
import { TrakkernavService } from './trakkernav.service';

describe('TrakkernavResolver', () => {
  let resolver: TrakkernavResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrakkernavResolver, TrakkernavService],
    }).compile();

    resolver = module.get<TrakkernavResolver>(TrakkernavResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
