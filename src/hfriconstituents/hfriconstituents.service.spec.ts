import { Test, TestingModule } from '@nestjs/testing';
import { HfriconstituentsService } from './hfriconstituents.service';

describe('HfriconstituentsService', () => {
  let service: HfriconstituentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HfriconstituentsService],
    }).compile();

    service = module.get<HfriconstituentsService>(HfriconstituentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
