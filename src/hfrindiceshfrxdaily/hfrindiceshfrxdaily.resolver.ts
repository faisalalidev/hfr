import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { HfrindiceshfrxdailyService } from './hfrindiceshfrxdaily.service';
import { CreateHfrindiceshfrxdailyInput } from './dto/create-hfrindiceshfrxdaily.input';
import { UpdateHfrindiceshfrxdailyInput } from './dto/update-hfrindiceshfrxdaily.input';

@Resolver('Hfrindiceshfrxdaily')
export class HfrindiceshfrxdailyResolver {
  constructor(private readonly hfrindiceshfrxdailyService: HfrindiceshfrxdailyService) {}

  @Mutation('createHfrindiceshfrxdaily')
  create(@Args('createHfrindiceshfrxdailyInput') createHfrindiceshfrxdailyInput: CreateHfrindiceshfrxdailyInput) {
    return this.hfrindiceshfrxdailyService.create(createHfrindiceshfrxdailyInput);
  }

  @Query('hfrindiceshfrxdaily')
  findAll() {
    return this.hfrindiceshfrxdailyService.findAll();
  }

  @Query('hfrindiceshfrxdaily')
  findOne(@Args('id') id: number) {
    return this.hfrindiceshfrxdailyService.findOne(id);
  }

  @Mutation('updateHfrindiceshfrxdaily')
  update(@Args('updateHfrindiceshfrxdailyInput') updateHfrindiceshfrxdailyInput: UpdateHfrindiceshfrxdailyInput) {
    return this.hfrindiceshfrxdailyService.update(updateHfrindiceshfrxdailyInput.id, updateHfrindiceshfrxdailyInput);
  }

  @Mutation('removeHfrindiceshfrxdaily')
  remove(@Args('id') id: number) {
    return this.hfrindiceshfrxdailyService.remove(id);
  }
}
