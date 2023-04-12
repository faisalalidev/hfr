import { Module } from '@nestjs/common';
import { WebhfrindicesService } from './webhfrindices.service';
import { WebhfrindicesResolver } from './webhfrindices.resolver';

@Module({
  providers: [WebhfrindicesResolver, WebhfrindicesService]
})
export class WebhfrindicesModule {}
