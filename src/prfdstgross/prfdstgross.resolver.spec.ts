import { Test, TestingModule } from '@nestjs/testing';
import { PrfdstgrossResolver } from './prfdstgross.resolver';
import { PrfdstgrossService } from './prfdstgross.service';

describe('PrfdstgrossResolver', () => {
  let resolver: PrfdstgrossResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrfdstgrossResolver, PrfdstgrossService],
    }).compile();

    resolver = module.get<PrfdstgrossResolver>(PrfdstgrossResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
