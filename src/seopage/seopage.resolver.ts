import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SeopageService } from './seopage.service';
import { CreateSeopageInput } from './dto/create-seopage.input';
import { UpdateSeopageInput } from './dto/update-seopage.input';

@Resolver('Seopage')
export class SeopageResolver {
  constructor(private readonly seopageService: SeopageService) {}

  @Mutation('createSeopage')
  create(@Args('createSeopageInput') createSeopageInput: CreateSeopageInput) {
    return this.seopageService.create(createSeopageInput);
  }

  @Query('seopage')
  findAll() {
    return this.seopageService.findAll();
  }

  @Query('seopage')
  findOne(@Args('id') id: number) {
    return this.seopageService.findOne(id);
  }

  @Mutation('updateSeopage')
  update(@Args('updateSeopageInput') updateSeopageInput: UpdateSeopageInput) {
    return this.seopageService.update(updateSeopageInput.id, updateSeopageInput);
  }

  @Mutation('removeSeopage')
  remove(@Args('id') id: number) {
    return this.seopageService.remove(id);
  }
}
