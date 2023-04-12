import { Test, TestingModule } from '@nestjs/testing';
import { NdxmgrnavService } from './ndxmgrnav.service';

describe('NdxmgrnavService', () => {
  let service: NdxmgrnavService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NdxmgrnavService],
    }).compile();

    service = module.get<NdxmgrnavService>(NdxmgrnavService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
