import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LkuserdocService } from './lkuserdoc.service';
import { CreateLkuserdocInput } from './dto/create-lkuserdoc.input';
import { UpdateLkuserdocInput } from './dto/update-lkuserdoc.input';

@Resolver('Lkuserdoc')
export class LkuserdocResolver {
  constructor(private readonly lkuserdocService: LkuserdocService) {}

  @Mutation('createLkuserdoc')
  create(@Args('createLkuserdocInput') createLkuserdocInput: CreateLkuserdocInput) {
    return this.lkuserdocService.create(createLkuserdocInput);
  }

  @Query('lkuserdoc')
  findAll() {
    return this.lkuserdocService.findAll();
  }

  @Query('lkuserdoc')
  findOne(@Args('id') id: number) {
    return this.lkuserdocService.findOne(id);
  }

  @Mutation('updateLkuserdoc')
  update(@Args('updateLkuserdocInput') updateLkuserdocInput: UpdateLkuserdocInput) {
    return this.lkuserdocService.update(updateLkuserdocInput.id, updateLkuserdocInput);
  }

  @Mutation('removeLkuserdoc')
  remove(@Args('id') id: number) {
    return this.lkuserdocService.remove(id);
  }
}
