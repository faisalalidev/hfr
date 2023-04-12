import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { HfrindiceshfraService } from './hfrindiceshfra.service';
import { CreateHfrindiceshfraInput } from './dto/create-hfrindiceshfra.input';
import { UpdateHfrindiceshfraInput } from './dto/update-hfrindiceshfra.input';

@Resolver('Hfrindiceshfra')
export class HfrindiceshfraResolver {
  constructor(private readonly hfrindiceshfraService: HfrindiceshfraService) {}

  @Mutation('createHfrindiceshfra')
  create(@Args('createHfrindiceshfraInput') createHfrindiceshfraInput: CreateHfrindiceshfraInput) {
    return this.hfrindiceshfraService.create(createHfrindiceshfraInput);
  }

  @Query('hfrindiceshfra')
  findAll() {
    return this.hfrindiceshfraService.findAll();
  }

  @Query('hfrindiceshfra')
  findOne(@Args('id') id: number) {
    return this.hfrindiceshfraService.findOne(id);
  }

  @Mutation('updateHfrindiceshfra')
  update(@Args('updateHfrindiceshfraInput') updateHfrindiceshfraInput: UpdateHfrindiceshfraInput) {
    return this.hfrindiceshfraService.update(updateHfrindiceshfraInput.id, updateHfrindiceshfraInput);
  }

  @Mutation('removeHfrindiceshfra')
  remove(@Args('id') id: number) {
    return this.hfrindiceshfraService.remove(id);
  }
}
