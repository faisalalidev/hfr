import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Hfrindiceshfri500Service } from './hfrindiceshfri500.service';
import { CreateHfrindiceshfri500Input } from './dto/create-hfrindiceshfri500.input';
import { UpdateHfrindiceshfri500Input } from './dto/update-hfrindiceshfri500.input';

@Resolver('Hfrindiceshfri500')
export class Hfrindiceshfri500Resolver {
  constructor(private readonly hfrindiceshfri500Service: Hfrindiceshfri500Service) {}

  @Mutation('createHfrindiceshfri500')
  create(@Args('createHfrindiceshfri500Input') createHfrindiceshfri500Input: CreateHfrindiceshfri500Input) {
    return this.hfrindiceshfri500Service.create(createHfrindiceshfri500Input);
  }

  @Query('hfrindiceshfri500')
  findAll() {
    return this.hfrindiceshfri500Service.findAll();
  }

  @Query('hfrindiceshfri500')
  findOne(@Args('id') id: number) {
    return this.hfrindiceshfri500Service.findOne(id);
  }

  @Mutation('updateHfrindiceshfri500')
  update(@Args('updateHfrindiceshfri500Input') updateHfrindiceshfri500Input: UpdateHfrindiceshfri500Input) {
    return this.hfrindiceshfri500Service.update(updateHfrindiceshfri500Input.id, updateHfrindiceshfri500Input);
  }

  @Mutation('removeHfrindiceshfri500')
  remove(@Args('id') id: number) {
    return this.hfrindiceshfri500Service.remove(id);
  }
}
