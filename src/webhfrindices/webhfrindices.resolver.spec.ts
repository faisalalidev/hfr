import { Test, TestingModule } from '@nestjs/testing';
import { WebhfrindicesResolver } from './webhfrindices.resolver';
import { WebhfrindicesService } from './webhfrindices.service';

describe('WebhfrindicesResolver', () => {
  let resolver: WebhfrindicesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebhfrindicesResolver, WebhfrindicesService],
    }).compile();

    resolver = module.get<WebhfrindicesResolver>(WebhfrindicesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
