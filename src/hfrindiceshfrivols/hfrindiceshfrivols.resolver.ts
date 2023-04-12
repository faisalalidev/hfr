import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { HfrindiceshfrivolsService } from './hfrindiceshfrivols.service';
import { CreateHfrindiceshfrivolInput } from './dto/create-hfrindiceshfrivol.input';
import { UpdateHfrindiceshfrivolInput } from './dto/update-hfrindiceshfrivol.input';

@Resolver('Hfrindiceshfrivol')
export class HfrindiceshfrivolsResolver {
  constructor(private readonly hfrindiceshfrivolsService: HfrindiceshfrivolsService) {}

  @Mutation('createHfrindiceshfrivol')
  create(@Args('createHfrindiceshfrivolInput') createHfrindiceshfrivolInput: CreateHfrindiceshfrivolInput) {
    return this.hfrindiceshfrivolsService.create(createHfrindiceshfrivolInput);
  }

  @Query('hfrindiceshfrivols')
  findAll() {
    return this.hfrindiceshfrivolsService.findAll();
  }

  @Query('hfrindiceshfrivol')
  findOne(@Args('id') id: number) {
    return this.hfrindiceshfrivolsService.findOne(id);
  }

  @Mutation('updateHfrindiceshfrivol')
  update(@Args('updateHfrindiceshfrivolInput') updateHfrindiceshfrivolInput: UpdateHfrindiceshfrivolInput) {
    return this.hfrindiceshfrivolsService.update(updateHfrindiceshfrivolInput.id, updateHfrindiceshfrivolInput);
  }

  @Mutation('removeHfrindiceshfrivol')
  remove(@Args('id') id: number) {
    return this.hfrindiceshfrivolsService.remove(id);
  }
}
