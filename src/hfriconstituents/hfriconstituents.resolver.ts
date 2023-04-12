import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { HfriconstituentsService } from './hfriconstituents.service';
import { CreateHfriconstituentInput } from './dto/create-hfriconstituent.input';
import { UpdateHfriconstituentInput } from './dto/update-hfriconstituent.input';

@Resolver('Hfriconstituent')
export class HfriconstituentsResolver {
  constructor(private readonly hfriconstituentsService: HfriconstituentsService) {}

  @Mutation('createHfriconstituent')
  create(@Args('createHfriconstituentInput') createHfriconstituentInput: CreateHfriconstituentInput) {
    return this.hfriconstituentsService.create(createHfriconstituentInput);
  }

  @Query('hfriconstituents')
  findAll() {
    return this.hfriconstituentsService.findAll();
  }

  @Query('hfriconstituent')
  findOne(@Args('id') id: number) {
    return this.hfriconstituentsService.findOne(id);
  }

  @Mutation('updateHfriconstituent')
  update(@Args('updateHfriconstituentInput') updateHfriconstituentInput: UpdateHfriconstituentInput) {
    return this.hfriconstituentsService.update(updateHfriconstituentInput.id, updateHfriconstituentInput);
  }

  @Mutation('removeHfriconstituent')
  remove(@Args('id') id: number) {
    return this.hfriconstituentsService.remove(id);
  }
}
