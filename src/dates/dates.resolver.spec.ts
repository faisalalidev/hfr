import { Test, TestingModule } from '@nestjs/testing';
import { DatesResolver } from './dates.resolver';
import { DatesService } from './dates.service';

describe('DatesResolver', () => {
  let resolver: DatesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatesResolver, DatesService],
    }).compile();

    resolver = module.get<DatesResolver>(DatesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
