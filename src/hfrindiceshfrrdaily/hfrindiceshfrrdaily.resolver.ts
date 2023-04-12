import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { HfrindiceshfrrdailyService } from './hfrindiceshfrrdaily.service';
import { CreateHfrindiceshfrrdailyInput } from './dto/create-hfrindiceshfrrdaily.input';
import { UpdateHfrindiceshfrrdailyInput } from './dto/update-hfrindiceshfrrdaily.input';

@Resolver('Hfrindiceshfrrdaily')
export class HfrindiceshfrrdailyResolver {
  constructor(private readonly hfrindiceshfrrdailyService: HfrindiceshfrrdailyService) {}

  @Mutation('createHfrindiceshfrrdaily')
  create(@Args('createHfrindiceshfrrdailyInput') createHfrindiceshfrrdailyInput: CreateHfrindiceshfrrdailyInput) {
    return this.hfrindiceshfrrdailyService.create(createHfrindiceshfrrdailyInput);
  }

  @Query('hfrindiceshfrrdaily')
  findAll() {
    return this.hfrindiceshfrrdailyService.findAll();
  }

  @Query('hfrindiceshfrrdaily')
  findOne(@Args('id') id: number) {
    return this.hfrindiceshfrrdailyService.findOne(id);
  }

  @Mutation('updateHfrindiceshfrrdaily')
  update(@Args('updateHfrindiceshfrrdailyInput') updateHfrindiceshfrrdailyInput: UpdateHfrindiceshfrrdailyInput) {
    return this.hfrindiceshfrrdailyService.update(updateHfrindiceshfrrdailyInput.id, updateHfrindiceshfrrdailyInput);
  }

  @Mutation('removeHfrindiceshfrrdaily')
  remove(@Args('id') id: number) {
    return this.hfrindiceshfrrdailyService.remove(id);
  }
}
