import { Test, TestingModule } from '@nestjs/testing';
import { WebtemplatesService } from './webtemplates.service';

describe('WebtemplatesService', () => {
  let service: WebtemplatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebtemplatesService],
    }).compile();

    service = module.get<WebtemplatesService>(WebtemplatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
