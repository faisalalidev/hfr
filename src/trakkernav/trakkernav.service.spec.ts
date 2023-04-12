import { Test, TestingModule } from '@nestjs/testing';
import { TrakkernavService } from './trakkernav.service';

describe('TrakkernavService', () => {
  let service: TrakkernavService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrakkernavService],
    }).compile();

    service = module.get<TrakkernavService>(TrakkernavService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
