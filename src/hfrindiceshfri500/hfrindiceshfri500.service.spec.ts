import { Test, TestingModule } from '@nestjs/testing';
import { Hfrindiceshfri500Service } from './hfrindiceshfri500.service';

describe('Hfrindiceshfri500Service', () => {
  let service: Hfrindiceshfri500Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Hfrindiceshfri500Service],
    }).compile();

    service = module.get<Hfrindiceshfri500Service>(Hfrindiceshfri500Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
