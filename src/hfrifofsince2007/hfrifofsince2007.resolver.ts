import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Hfrifofsince2007Service } from './hfrifofsince2007.service';
import { CreateHfrifofsince2007Input } from './dto/create-hfrifofsince2007.input';
import { UpdateHfrifofsince2007Input } from './dto/update-hfrifofsince2007.input';

@Resolver('Hfrifofsince2007')
export class Hfrifofsince2007Resolver {
  constructor(private readonly hfrifofsince2007Service: Hfrifofsince2007Service) {}

  @Mutation('createHfrifofsince2007')
  create(@Args('createHfrifofsince2007Input') createHfrifofsince2007Input: CreateHfrifofsince2007Input) {
    return this.hfrifofsince2007Service.create(createHfrifofsince2007Input);
  }

  @Query('hfrifofsince2007')
  findAll() {
    return this.hfrifofsince2007Service.findAll();
  }

  @Query('hfrifofsince2007')
  findOne(@Args('id') id: number) {
    return this.hfrifofsince2007Service.findOne(id);
  }

  @Mutation('updateHfrifofsince2007')
  update(@Args('updateHfrifofsince2007Input') updateHfrifofsince2007Input: UpdateHfrifofsince2007Input) {
    return this.hfrifofsince2007Service.update(updateHfrifofsince2007Input.id, updateHfrifofsince2007Input);
  }

  @Mutation('removeHfrifofsince2007')
  remove(@Args('id') id: number) {
    return this.hfrifofsince2007Service.remove(id);
  }
}
