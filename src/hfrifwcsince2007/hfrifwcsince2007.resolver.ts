import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Hfrifwcsince2007Service } from './hfrifwcsince2007.service';
import { CreateHfrifwcsince2007Input } from './dto/create-hfrifwcsince2007.input';
import { UpdateHfrifwcsince2007Input } from './dto/update-hfrifwcsince2007.input';

@Resolver('Hfrifwcsince2007')
export class Hfrifwcsince2007Resolver {
  constructor(private readonly hfrifwcsince2007Service: Hfrifwcsince2007Service) {}

  @Mutation('createHfrifwcsince2007')
  create(@Args('createHfrifwcsince2007Input') createHfrifwcsince2007Input: CreateHfrifwcsince2007Input) {
    return this.hfrifwcsince2007Service.create(createHfrifwcsince2007Input);
  }

  @Query('hfrifwcsince2007')
  findAll() {
    return this.hfrifwcsince2007Service.findAll();
  }

  @Query('hfrifwcsince2007')
  findOne(@Args('id') id: number) {
    return this.hfrifwcsince2007Service.findOne(id);
  }

  @Mutation('updateHfrifwcsince2007')
  update(@Args('updateHfrifwcsince2007Input') updateHfrifwcsince2007Input: UpdateHfrifwcsince2007Input) {
    return this.hfrifwcsince2007Service.update(updateHfrifwcsince2007Input.id, updateHfrifwcsince2007Input);
  }

  @Mutation('removeHfrifwcsince2007')
  remove(@Args('id') id: number) {
    return this.hfrifwcsince2007Service.remove(id);
  }
}
