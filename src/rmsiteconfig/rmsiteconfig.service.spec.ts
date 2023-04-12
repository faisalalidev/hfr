import { Test, TestingModule } from '@nestjs/testing';
import { RmsiteconfigService } from './rmsiteconfig.service';

describe('RmsiteconfigService', () => {
  let service: RmsiteconfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RmsiteconfigService],
    }).compile();

    service = module.get<RmsiteconfigService>(RmsiteconfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
