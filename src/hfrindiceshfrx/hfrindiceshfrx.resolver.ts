import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { HfrindiceshfrxService } from './hfrindiceshfrx.service';
import { CreateHfrindiceshfrxInput } from './dto/create-hfrindiceshfrx.input';
import { UpdateHfrindiceshfrxInput } from './dto/update-hfrindiceshfrx.input';

@Resolver('Hfrindiceshfrx')
export class HfrindiceshfrxResolver {
  constructor(private readonly hfrindiceshfrxService: HfrindiceshfrxService) {}

  @Mutation('createHfrindiceshfrx')
  create(@Args('createHfrindiceshfrxInput') createHfrindiceshfrxInput: CreateHfrindiceshfrxInput) {
    return this.hfrindiceshfrxService.create(createHfrindiceshfrxInput);
  }

  @Query('hfrindiceshfrx')
  findAll() {
    return this.hfrindiceshfrxService.findAll();
  }

  @Query('hfrindiceshfrx')
  findOne(@Args('id') id: number) {
    return this.hfrindiceshfrxService.findOne(id);
  }

  @Mutation('updateHfrindiceshfrx')
  update(@Args('updateHfrindiceshfrxInput') updateHfrindiceshfrxInput: UpdateHfrindiceshfrxInput) {
    return this.hfrindiceshfrxService.update(updateHfrindiceshfrxInput.id, updateHfrindiceshfrxInput);
  }

  @Mutation('removeHfrindiceshfrx')
  remove(@Args('id') id: number) {
    return this.hfrindiceshfrxService.remove(id);
  }
}
