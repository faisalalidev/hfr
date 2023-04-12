import { Test, TestingModule } from '@nestjs/testing';
import { Hfrifofsince2007Service } from './hfrifofsince2007.service';

describe('Hfrifofsince2007Service', () => {
  let service: Hfrifofsince2007Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Hfrifofsince2007Service],
    }).compile();

    service = module.get<Hfrifofsince2007Service>(Hfrifofsince2007Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
