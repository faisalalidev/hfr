import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { WebtemplatesService } from './webtemplates.service';
import { CreateWebtemplateInput } from './dto/create-webtemplate.input';
import { UpdateWebtemplateInput } from './dto/update-webtemplate.input';

@Resolver('Webtemplate')
export class WebtemplatesResolver {
  constructor(private readonly webtemplatesService: WebtemplatesService) {}

  @Mutation('createWebtemplate')
  create(@Args('createWebtemplateInput') createWebtemplateInput: CreateWebtemplateInput) {
    return this.webtemplatesService.create(createWebtemplateInput);
  }

  @Query('webtemplates')
  findAll() {
    return this.webtemplatesService.findAll();
  }

  @Query('webtemplate')
  findOne(@Args('id') id: number) {
    return this.webtemplatesService.findOne(id);
  }

  @Mutation('updateWebtemplate')
  update(@Args('updateWebtemplateInput') updateWebtemplateInput: UpdateWebtemplateInput) {
    return this.webtemplatesService.update(updateWebtemplateInput.id, updateWebtemplateInput);
  }

  @Mutation('removeWebtemplate')
  remove(@Args('id') id: number) {
    return this.webtemplatesService.remove(id);
  }
}
