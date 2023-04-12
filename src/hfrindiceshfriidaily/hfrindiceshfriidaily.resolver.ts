import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { HfrindiceshfriidailyService } from './hfrindiceshfriidaily.service';
import { CreateHfrindiceshfriidailyInput } from './dto/create-hfrindiceshfriidaily.input';
import { UpdateHfrindiceshfriidailyInput } from './dto/update-hfrindiceshfriidaily.input';

@Resolver('Hfrindiceshfriidaily')
export class HfrindiceshfriidailyResolver {
  constructor(private readonly hfrindiceshfriidailyService: HfrindiceshfriidailyService) {}

  @Mutation('createHfrindiceshfriidaily')
  create(@Args('createHfrindiceshfriidailyInput') createHfrindiceshfriidailyInput: CreateHfrindiceshfriidailyInput) {
    return this.hfrindiceshfriidailyService.create(createHfrindiceshfriidailyInput);
  }

  @Query('hfrindiceshfriidaily')
  findAll() {
    return this.hfrindiceshfriidailyService.findAll();
  }

  @Query('hfrindiceshfriidaily')
  findOne(@Args('id') id: number) {
    return this.hfrindiceshfriidailyService.findOne(id);
  }

  @Mutation('updateHfrindiceshfriidaily')
  update(@Args('updateHfrindiceshfriidailyInput') updateHfrindiceshfriidailyInput: UpdateHfrindiceshfriidailyInput) {
    return this.hfrindiceshfriidailyService.update(updateHfrindiceshfriidailyInput.id, updateHfrindiceshfriidailyInput);
  }

  @Mutation('removeHfrindiceshfriidaily')
  remove(@Args('id') id: number) {
    return this.hfrindiceshfriidailyService.remove(id);
  }
}
