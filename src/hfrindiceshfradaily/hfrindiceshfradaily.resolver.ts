import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { HfrindiceshfradailyService } from './hfrindiceshfradaily.service';
import { CreateHfrindiceshfradailyInput } from './dto/create-hfrindiceshfradaily.input';
import { UpdateHfrindiceshfradailyInput } from './dto/update-hfrindiceshfradaily.input';

@Resolver('Hfrindiceshfradaily')
export class HfrindiceshfradailyResolver {
  constructor(private readonly hfrindiceshfradailyService: HfrindiceshfradailyService) {}

  @Mutation('createHfrindiceshfradaily')
  create(@Args('createHfrindiceshfradailyInput') createHfrindiceshfradailyInput: CreateHfrindiceshfradailyInput) {
    return this.hfrindiceshfradailyService.create(createHfrindiceshfradailyInput);
  }

  @Query('hfrindiceshfradaily')
  findAll() {
    return this.hfrindiceshfradailyService.findAll();
  }

  @Query('hfrindiceshfradaily')
  findOne(@Args('id') id: number) {
    return this.hfrindiceshfradailyService.findOne(id);
  }

  @Mutation('updateHfrindiceshfradaily')
  update(@Args('updateHfrindiceshfradailyInput') updateHfrindiceshfradailyInput: UpdateHfrindiceshfradailyInput) {
    return this.hfrindiceshfradailyService.update(updateHfrindiceshfradailyInput.id, updateHfrindiceshfradailyInput);
  }

  @Mutation('removeHfrindiceshfradaily')
  remove(@Args('id') id: number) {
    return this.hfrindiceshfradailyService.remove(id);
  }
}
