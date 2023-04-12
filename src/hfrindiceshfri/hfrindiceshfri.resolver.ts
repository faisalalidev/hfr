import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { HfrindiceshfriService } from './hfrindiceshfri.service';
import { CreateHfrindiceshfriInput } from './dto/create-hfrindiceshfri.input';
import { UpdateHfrindiceshfriInput } from './dto/update-hfrindiceshfri.input';

@Resolver('Hfrindiceshfri')
export class HfrindiceshfriResolver {
  constructor(private readonly hfrindiceshfriService: HfrindiceshfriService) {}

  @Mutation('createHfrindiceshfri')
  create(@Args('createHfrindiceshfriInput') createHfrindiceshfriInput: CreateHfrindiceshfriInput) {
    return this.hfrindiceshfriService.create(createHfrindiceshfriInput);
  }

  @Query('hfrindiceshfri')
  findAll() {
    return this.hfrindiceshfriService.findAll();
  }

  @Query('hfrindiceshfri')
  findOne(@Args('id') id: number) {
    return this.hfrindiceshfriService.findOne(id);
  }

  @Mutation('updateHfrindiceshfri')
  update(@Args('updateHfrindiceshfriInput') updateHfrindiceshfriInput: UpdateHfrindiceshfriInput) {
    return this.hfrindiceshfriService.update(updateHfrindiceshfriInput.id, updateHfrindiceshfriInput);
  }

  @Mutation('removeHfrindiceshfri')
  remove(@Args('id') id: number) {
    return this.hfrindiceshfriService.remove(id);
  }
}
