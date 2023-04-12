import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { HfrindiceshfruService } from './hfrindiceshfru.service';
import { CreateHfrindiceshfruInput } from './dto/create-hfrindiceshfru.input';
import { UpdateHfrindiceshfruInput } from './dto/update-hfrindiceshfru.input';

@Resolver('Hfrindiceshfru')
export class HfrindiceshfruResolver {
  constructor(private readonly hfrindiceshfruService: HfrindiceshfruService) {}

  @Mutation('createHfrindiceshfru')
  create(@Args('createHfrindiceshfruInput') createHfrindiceshfruInput: CreateHfrindiceshfruInput) {
    return this.hfrindiceshfruService.create(createHfrindiceshfruInput);
  }

  @Query('hfrindiceshfru')
  findAll() {
    return this.hfrindiceshfruService.findAll();
  }

  @Query('hfrindiceshfru')
  findOne(@Args('id') id: number) {
    return this.hfrindiceshfruService.findOne(id);
  }

  @Mutation('updateHfrindiceshfru')
  update(@Args('updateHfrindiceshfruInput') updateHfrindiceshfruInput: UpdateHfrindiceshfruInput) {
    return this.hfrindiceshfruService.update(updateHfrindiceshfruInput.id, updateHfrindiceshfruInput);
  }

  @Mutation('removeHfrindiceshfru')
  remove(@Args('id') id: number) {
    return this.hfrindiceshfruService.remove(id);
  }
}
