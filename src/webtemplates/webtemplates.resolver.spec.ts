import { Test, TestingModule } from '@nestjs/testing';
import { WebtemplatesResolver } from './webtemplates.resolver';
import { WebtemplatesService } from './webtemplates.service';

describe('WebtemplatesResolver', () => {
  let resolver: WebtemplatesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebtemplatesResolver, WebtemplatesService],
    }).compile();

    resolver = module.get<WebtemplatesResolver>(WebtemplatesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
