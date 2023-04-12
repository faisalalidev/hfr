import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { HfrindiceshfrpService } from './hfrindiceshfrp.service';
import { CreateHfrindiceshfrpInput } from './dto/create-hfrindiceshfrp.input';
import { UpdateHfrindiceshfrpInput } from './dto/update-hfrindiceshfrp.input';

@Resolver('Hfrindiceshfrp')
export class HfrindiceshfrpResolver {
  constructor(private readonly hfrindiceshfrpService: HfrindiceshfrpService) {}

  @Mutation('createHfrindiceshfrp')
  create(@Args('createHfrindiceshfrpInput') createHfrindiceshfrpInput: CreateHfrindiceshfrpInput) {
    return this.hfrindiceshfrpService.create(createHfrindiceshfrpInput);
  }

  @Query('hfrindiceshfrp')
  findAll() {
    return this.hfrindiceshfrpService.findAll();
  }

  @Query('hfrindiceshfrp')
  findOne(@Args('id') id: number) {
    return this.hfrindiceshfrpService.findOne(id);
  }

  @Mutation('updateHfrindiceshfrp')
  update(@Args('updateHfrindiceshfrpInput') updateHfrindiceshfrpInput: UpdateHfrindiceshfrpInput) {
    return this.hfrindiceshfrpService.update(updateHfrindiceshfrpInput.id, updateHfrindiceshfrpInput);
  }

  @Mutation('removeHfrindiceshfrp')
  remove(@Args('id') id: number) {
    return this.hfrindiceshfrpService.remove(id);
  }
}
