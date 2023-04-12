import { CreateWebhfrindexInput } from './create-webhfrindex.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateWebhfrindexInput extends PartialType(CreateWebhfrindexInput) {
  id: number;
}
