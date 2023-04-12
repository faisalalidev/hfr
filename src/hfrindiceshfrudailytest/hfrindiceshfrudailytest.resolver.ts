import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { HfrindiceshfrudailytestService } from './hfrindiceshfrudailytest.service';
import { CreateHfrindiceshfrudailytestInput } from './dto/create-hfrindiceshfrudailytest.input';
import { UpdateHfrindiceshfrudailytestInput } from './dto/update-hfrindiceshfrudailytest.input';

@Resolver('Hfrindiceshfrudailytest')
export class HfrindiceshfrudailytestResolver {
  constructor(private readonly hfrindiceshfrudailytestService: HfrindiceshfrudailytestService) {}

  @Mutation('createHfrindiceshfrudailytest')
  create(@Args('createHfrindiceshfrudailytestInput') createHfrindiceshfrudailytestInput: CreateHfrindiceshfrudailytestInput) {
    return this.hfrindiceshfrudailytestService.create(createHfrindiceshfrudailytestInput);
  }

  @Query('hfrindiceshfrudailytest')
  findAll() {
    return this.hfrindiceshfrudailytestService.findAll();
  }

  @Query('hfrindiceshfrudailytest')
  findOne(@Args('id') id: number) {
    return this.hfrindiceshfrudailytestService.findOne(id);
  }

  @Mutation('updateHfrindiceshfrudailytest')
  update(@Args('updateHfrindiceshfrudailytestInput') updateHfrindiceshfrudailytestInput: UpdateHfrindiceshfrudailytestInput) {
    return this.hfrindiceshfrudailytestService.update(updateHfrindiceshfrudailytestInput.id, updateHfrindiceshfrudailytestInput);
  }

  @Mutation('removeHfrindiceshfrudailytest')
  remove(@Args('id') id: number) {
    return this.hfrindiceshfrudailytestService.remove(id);
  }
}
