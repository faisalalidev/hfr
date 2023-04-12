import { Test, TestingModule } from '@nestjs/testing';
import { UserlogintrackingService } from './userlogintracking.service';

describe('UserlogintrackingService', () => {
  let service: UserlogintrackingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserlogintrackingService],
    }).compile();

    service = module.get<UserlogintrackingService>(UserlogintrackingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
