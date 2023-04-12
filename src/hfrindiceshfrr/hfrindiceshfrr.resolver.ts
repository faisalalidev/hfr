import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { HfrindiceshfrrService } from './hfrindiceshfrr.service';
import { CreateHfrindiceshfrrInput } from './dto/create-hfrindiceshfrr.input';
import { UpdateHfrindiceshfrrInput } from './dto/update-hfrindiceshfrr.input';

@Resolver('Hfrindiceshfrr')
export class HfrindiceshfrrResolver {
  constructor(private readonly hfrindiceshfrrService: HfrindiceshfrrService) {}

  @Mutation('createHfrindiceshfrr')
  create(@Args('createHfrindiceshfrrInput') createHfrindiceshfrrInput: CreateHfrindiceshfrrInput) {
    return this.hfrindiceshfrrService.create(createHfrindiceshfrrInput);
  }

  @Query('hfrindiceshfrr')
  findAll() {
    return this.hfrindiceshfrrService.findAll();
  }

  @Query('hfrindiceshfrr')
  findOne(@Args('id') id: number) {
    return this.hfrindiceshfrrService.findOne(id);
  }

  @Mutation('updateHfrindiceshfrr')
  update(@Args('updateHfrindiceshfrrInput') updateHfrindiceshfrrInput: UpdateHfrindiceshfrrInput) {
    return this.hfrindiceshfrrService.update(updateHfrindiceshfrrInput.id, updateHfrindiceshfrrInput);
  }

  @Mutation('removeHfrindiceshfrr')
  remove(@Args('id') id: number) {
    return this.hfrindiceshfrrService.remove(id);
  }
}
