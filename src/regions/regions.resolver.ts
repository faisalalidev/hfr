import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RegionsService } from './regions.service';
import { CreateRegionInput } from './dto/create-region.input';
import { UpdateRegionInput } from './dto/update-region.input';

@Resolver('Region')
export class RegionsResolver {
  constructor(private readonly regionsService: RegionsService) {}

  @Mutation('createRegion')
  create(@Args('createRegionInput') createRegionInput: CreateRegionInput) {
    return this.regionsService.create(createRegionInput);
  }

  @Query('regions')
  findAll() {
    return this.regionsService.findAll();
  }

  @Query('region')
  findOne(@Args('id') id: number) {
    return this.regionsService.findOne(id);
  }

  @Mutation('updateRegion')
  update(@Args('updateRegionInput') updateRegionInput: UpdateRegionInput) {
    return this.regionsService.update(updateRegionInput.id, updateRegionInput);
  }

  @Mutation('removeRegion')
  remove(@Args('id') id: number) {
    return this.regionsService.remove(id);
  }
}
