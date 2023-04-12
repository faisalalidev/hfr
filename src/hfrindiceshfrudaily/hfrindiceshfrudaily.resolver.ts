import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { HfrindiceshfrudailyService } from './hfrindiceshfrudaily.service';
import { CreateHfrindiceshfrudailyInput } from './dto/create-hfrindiceshfrudaily.input';
import { UpdateHfrindiceshfrudailyInput } from './dto/update-hfrindiceshfrudaily.input';

@Resolver('Hfrindiceshfrudaily')
export class HfrindiceshfrudailyResolver {
  constructor(private readonly hfrindiceshfrudailyService: HfrindiceshfrudailyService) {}

  @Mutation('createHfrindiceshfrudaily')
  create(@Args('createHfrindiceshfrudailyInput') createHfrindiceshfrudailyInput: CreateHfrindiceshfrudailyInput) {
    return this.hfrindiceshfrudailyService.create(createHfrindiceshfrudailyInput);
  }

  @Query('hfrindiceshfrudaily')
  findAll() {
    return this.hfrindiceshfrudailyService.findAll();
  }

  @Query('hfrindiceshfrudaily')
  findOne(@Args('id') id: number) {
    return this.hfrindiceshfrudailyService.findOne(id);
  }

  @Mutation('updateHfrindiceshfrudaily')
  update(@Args('updateHfrindiceshfrudailyInput') updateHfrindiceshfrudailyInput: UpdateHfrindiceshfrudailyInput) {
    return this.hfrindiceshfrudailyService.update(updateHfrindiceshfrudailyInput.id, updateHfrindiceshfrudailyInput);
  }

  @Mutation('removeHfrindiceshfrudaily')
  remove(@Args('id') id: number) {
    return this.hfrindiceshfrudailyService.remove(id);
  }
}
