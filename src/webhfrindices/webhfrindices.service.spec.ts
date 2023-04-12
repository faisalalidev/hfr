import { Test, TestingModule } from '@nestjs/testing';
import { WebhfrindicesService } from './webhfrindices.service';

describe('WebhfrindicesService', () => {
  let service: WebhfrindicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebhfrindicesService],
    }).compile();

    service = module.get<WebhfrindicesService>(WebhfrindicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
