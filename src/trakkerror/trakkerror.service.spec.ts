import { Test, TestingModule } from '@nestjs/testing';
import { TrakkerrorService } from './trakkerror.service';

describe('TrakkerrorService', () => {
  let service: TrakkerrorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrakkerrorService],
    }).compile();

    service = module.get<TrakkerrorService>(TrakkerrorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
