import { Test, TestingModule } from '@nestjs/testing';
import { HfrindiceshfriinstService } from './hfrindiceshfriinst.service';

describe('HfrindiceshfriinstService', () => {
  let service: HfrindiceshfriinstService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HfrindiceshfriinstService],
    }).compile();

    service = module.get<HfrindiceshfriinstService>(HfrindiceshfriinstService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
