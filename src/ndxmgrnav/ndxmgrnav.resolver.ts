import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { NdxmgrnavService } from './ndxmgrnav.service';
import { CreateNdxmgrnavInput } from './dto/create-ndxmgrnav.input';
import { UpdateNdxmgrnavInput } from './dto/update-ndxmgrnav.input';

@Resolver('Ndxmgrnav')
export class NdxmgrnavResolver {
  constructor(private readonly ndxmgrnavService: NdxmgrnavService) {}

  @Mutation('createNdxmgrnav')
  create(@Args('createNdxmgrnavInput') createNdxmgrnavInput: CreateNdxmgrnavInput) {
    return this.ndxmgrnavService.create(createNdxmgrnavInput);
  }

  @Query('ndxmgrnav')
  findAll() {
    return this.ndxmgrnavService.findAll();
  }

  @Query('ndxmgrnav')
  findOne(@Args('id') id: number) {
    return this.ndxmgrnavService.findOne(id);
  }

  @Mutation('updateNdxmgrnav')
  update(@Args('updateNdxmgrnavInput') updateNdxmgrnavInput: UpdateNdxmgrnavInput) {
    return this.ndxmgrnavService.update(updateNdxmgrnavInput.id, updateNdxmgrnavInput);
  }

  @Mutation('removeNdxmgrnav')
  remove(@Args('id') id: number) {
    return this.ndxmgrnavService.remove(id);
  }
}
