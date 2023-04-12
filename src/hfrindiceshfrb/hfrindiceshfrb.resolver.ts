import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { HfrindiceshfrbService } from './hfrindiceshfrb.service';
import { CreateHfrindiceshfrbInput } from './dto/create-hfrindiceshfrb.input';
import { UpdateHfrindiceshfrbInput } from './dto/update-hfrindiceshfrb.input';

@Resolver('Hfrindiceshfrb')
export class HfrindiceshfrbResolver {
  constructor(private readonly hfrindiceshfrbService: HfrindiceshfrbService) {}

  @Mutation('createHfrindiceshfrb')
  create(@Args('createHfrindiceshfrbInput') createHfrindiceshfrbInput: CreateHfrindiceshfrbInput) {
    return this.hfrindiceshfrbService.create(createHfrindiceshfrbInput);
  }

  @Query('hfrindiceshfrb')
  findAll() {
    return this.hfrindiceshfrbService.findAll();
  }

  @Query('hfrindiceshfrb')
  findOne(@Args('id') id: number) {
    return this.hfrindiceshfrbService.findOne(id);
  }

  @Mutation('updateHfrindiceshfrb')
  update(@Args('updateHfrindiceshfrbInput') updateHfrindiceshfrbInput: UpdateHfrindiceshfrbInput) {
    return this.hfrindiceshfrbService.update(updateHfrindiceshfrbInput.id, updateHfrindiceshfrbInput);
  }

  @Mutation('removeHfrindiceshfrb')
  remove(@Args('id') id: number) {
    return this.hfrindiceshfrbService.remove(id);
  }
}
