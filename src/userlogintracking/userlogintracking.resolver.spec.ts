import { Test, TestingModule } from '@nestjs/testing';
import { UserlogintrackingResolver } from './userlogintracking.resolver';
import { UserlogintrackingService } from './userlogintracking.service';

describe('UserlogintrackingResolver', () => {
  let resolver: UserlogintrackingResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserlogintrackingResolver, UserlogintrackingService],
    }).compile();

    resolver = module.get<UserlogintrackingResolver>(UserlogintrackingResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
