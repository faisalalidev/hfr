import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { HfrindiceshfriinstService } from './hfrindiceshfriinst.service';
import { CreateHfrindiceshfriinstInput } from './dto/create-hfrindiceshfriinst.input';
import { UpdateHfrindiceshfriinstInput } from './dto/update-hfrindiceshfriinst.input';

@Resolver('Hfrindiceshfriinst')
export class HfrindiceshfriinstResolver {
  constructor(private readonly hfrindiceshfriinstService: HfrindiceshfriinstService) {}

  @Mutation('createHfrindiceshfriinst')
  create(@Args('createHfrindiceshfriinstInput') createHfrindiceshfriinstInput: CreateHfrindiceshfriinstInput) {
    return this.hfrindiceshfriinstService.create(createHfrindiceshfriinstInput);
  }

  @Query('hfrindiceshfriinst')
  findAll() {
    return this.hfrindiceshfriinstService.findAll();
  }

  @Query('hfrindiceshfriinst')
  findOne(@Args('id') id: number) {
    return this.hfrindiceshfriinstService.findOne(id);
  }

  @Mutation('updateHfrindiceshfriinst')
  update(@Args('updateHfrindiceshfriinstInput') updateHfrindiceshfriinstInput: UpdateHfrindiceshfriinstInput) {
    return this.hfrindiceshfriinstService.update(updateHfrindiceshfriinstInput.id, updateHfrindiceshfriinstInput);
  }

  @Mutation('removeHfrindiceshfriinst')
  remove(@Args('id') id: number) {
    return this.hfrindiceshfriinstService.remove(id);
  }
}
