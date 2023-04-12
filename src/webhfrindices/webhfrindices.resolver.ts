import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { WebhfrindicesService } from './webhfrindices.service';
import { CreateWebhfrindexInput } from './dto/create-webhfrindex.input';
import { UpdateWebhfrindexInput } from './dto/update-webhfrindex.input';

@Resolver('Webhfrindex')
export class WebhfrindicesResolver {
  constructor(private readonly webhfrindicesService: WebhfrindicesService) {}

  @Mutation('createWebhfrindex')
  create(@Args('createWebhfrindexInput') createWebhfrindexInput: CreateWebhfrindexInput) {
    return this.webhfrindicesService.create(createWebhfrindexInput);
  }

  @Query('webhfrindices')
  findAll() {
    return this.webhfrindicesService.findAll();
  }

  @Query('webhfrindex')
  findOne(@Args('id') id: number) {
    return this.webhfrindicesService.findOne(id);
  }

  @Mutation('updateWebhfrindex')
  update(@Args('updateWebhfrindexInput') updateWebhfrindexInput: UpdateWebhfrindexInput) {
    return this.webhfrindicesService.update(updateWebhfrindexInput.id, updateWebhfrindexInput);
  }

  @Mutation('removeWebhfrindex')
  remove(@Args('id') id: number) {
    return this.webhfrindicesService.remove(id);
  }
}
