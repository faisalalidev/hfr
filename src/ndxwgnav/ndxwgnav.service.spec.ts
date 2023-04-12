import { Test, TestingModule } from '@nestjs/testing';
import { NdxwgnavService } from './ndxwgnav.service';

describe('NdxwgnavService', () => {
  let service: NdxwgnavService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NdxwgnavService],
    }).compile();

    service = module.get<NdxwgnavService>(NdxwgnavService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
