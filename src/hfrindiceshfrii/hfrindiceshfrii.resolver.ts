import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { HfrindiceshfriiService } from './hfrindiceshfrii.service';
import { CreateHfrindiceshfriiInput } from './dto/create-hfrindiceshfrii.input';
import { UpdateHfrindiceshfriiInput } from './dto/update-hfrindiceshfrii.input';

@Resolver('Hfrindiceshfrii')
export class HfrindiceshfriiResolver {
  constructor(private readonly hfrindiceshfriiService: HfrindiceshfriiService) {}

  @Mutation('createHfrindiceshfrii')
  create(@Args('createHfrindiceshfriiInput') createHfrindiceshfriiInput: CreateHfrindiceshfriiInput) {
    return this.hfrindiceshfriiService.create(createHfrindiceshfriiInput);
  }

  @Query('hfrindiceshfrii')
  findAll() {
    return this.hfrindiceshfriiService.findAll();
  }

  @Query('hfrindiceshfrii')
  findOne(@Args('id') id: number) {
    return this.hfrindiceshfriiService.findOne(id);
  }

  @Mutation('updateHfrindiceshfrii')
  update(@Args('updateHfrindiceshfriiInput') updateHfrindiceshfriiInput: UpdateHfrindiceshfriiInput) {
    return this.hfrindiceshfriiService.update(updateHfrindiceshfriiInput.id, updateHfrindiceshfriiInput);
  }

  @Mutation('removeHfrindiceshfrii')
  remove(@Args('id') id: number) {
    return this.hfrindiceshfriiService.remove(id);
  }
}
