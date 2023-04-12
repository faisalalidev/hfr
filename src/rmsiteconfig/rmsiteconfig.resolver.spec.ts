import { Test, TestingModule } from '@nestjs/testing';
import { RmsiteconfigResolver } from './rmsiteconfig.resolver';
import { RmsiteconfigService } from './rmsiteconfig.service';

describe('RmsiteconfigResolver', () => {
  let resolver: RmsiteconfigResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RmsiteconfigResolver, RmsiteconfigService],
    }).compile();

    resolver = module.get<RmsiteconfigResolver>(RmsiteconfigResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
