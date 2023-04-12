import { Test, TestingModule } from '@nestjs/testing';
import { Hfrifwcsince2007Service } from './hfrifwcsince2007.service';

describe('Hfrifwcsince2007Service', () => {
  let service: Hfrifwcsince2007Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Hfrifwcsince2007Service],
    }).compile();

    service = module.get<Hfrifwcsince2007Service>(Hfrifwcsince2007Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
