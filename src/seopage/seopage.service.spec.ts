import { Test, TestingModule } from '@nestjs/testing';
import { SeopageService } from './seopage.service';

describe('SeopageService', () => {
  let service: SeopageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeopageService],
    }).compile();

    service = module.get<SeopageService>(SeopageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
