import { Test, TestingModule } from '@nestjs/testing';
import { HfrxconstituentsService } from './hfrxconstituents.service';

describe('HfrxconstituentsService', () => {
  let service: HfrxconstituentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HfrxconstituentsService],
    }).compile();

    service = module.get<HfrxconstituentsService>(HfrxconstituentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
