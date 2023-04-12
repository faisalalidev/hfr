import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { HfrxconstituentsService } from './hfrxconstituents.service';
import { CreateHfrxconstituentInput } from './dto/create-hfrxconstituent.input';
import { UpdateHfrxconstituentInput } from './dto/update-hfrxconstituent.input';

@Resolver('Hfrxconstituent')
export class HfrxconstituentsResolver {
  constructor(private readonly hfrxconstituentsService: HfrxconstituentsService) {}

  @Mutation('createHfrxconstituent')
  create(@Args('createHfrxconstituentInput') createHfrxconstituentInput: CreateHfrxconstituentInput) {
    return this.hfrxconstituentsService.create(createHfrxconstituentInput);
  }

  @Query('hfrxconstituents')
  findAll() {
    return this.hfrxconstituentsService.findAll();
  }

  @Query('hfrxconstituent')
  findOne(@Args('id') id: number) {
    return this.hfrxconstituentsService.findOne(id);
  }

  @Mutation('updateHfrxconstituent')
  update(@Args('updateHfrxconstituentInput') updateHfrxconstituentInput: UpdateHfrxconstituentInput) {
    return this.hfrxconstituentsService.update(updateHfrxconstituentInput.id, updateHfrxconstituentInput);
  }

  @Mutation('removeHfrxconstituent')
  remove(@Args('id') id: number) {
    return this.hfrxconstituentsService.remove(id);
  }
}
