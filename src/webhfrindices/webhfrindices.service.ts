import { Injectable } from '@nestjs/common';
import { CreateWebhfrindexInput } from './dto/create-webhfrindex.input';
import { UpdateWebhfrindexInput } from './dto/update-webhfrindex.input';

@Injectable()
export class WebhfrindicesService {
  create(createWebhfrindexInput: CreateWebhfrindexInput) {
    return 'This action adds a new webhfrindex';
  }

  findAll() {
    return `This action returns all webhfrindices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} webhfrindex`;
  }

  update(id: number, updateWebhfrindexInput: UpdateWebhfrindexInput) {
    return `This action updates a #${id} webhfrindex`;
  }

  remove(id: number) {
    return `This action removes a #${id} webhfrindex`;
  }
}
