import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LkgroupService } from './lkgroup.service';
import { CreateLkgroupInput } from './dto/create-lkgroup.input';
import { UpdateLkgroupInput } from './dto/update-lkgroup.input';

@Resolver('Lkgroup')
export class LkgroupResolver {
  constructor(private readonly lkgroupService: LkgroupService) {}

  @Mutation('createLkgroup')
  create(@Args('createLkgroupInput') createLkgroupInput: CreateLkgroupInput) {
    return this.lkgroupService.create(createLkgroupInput);
  }

  @Query('lkgroup')
  findAll() {
    return this.lkgroupService.findAll();
  }

  @Query('lkgroup')
  findOne(@Args('id') id: number) {
    return this.lkgroupService.findOne(id);
  }

  @Mutation('updateLkgroup')
  update(@Args('updateLkgroupInput') updateLkgroupInput: UpdateLkgroupInput) {
    return this.lkgroupService.update(updateLkgroupInput.id, updateLkgroupInput);
  }

  @Mutation('removeLkgroup')
  remove(@Args('id') id: number) {
    return this.lkgroupService.remove(id);
  }
}
