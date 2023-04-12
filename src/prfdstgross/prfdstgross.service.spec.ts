import { Test, TestingModule } from '@nestjs/testing';
import { PrfdstgrossService } from './prfdstgross.service';

describe('PrfdstgrossService', () => {
  let service: PrfdstgrossService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrfdstgrossService],
    }).compile();

    service = module.get<PrfdstgrossService>(PrfdstgrossService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
