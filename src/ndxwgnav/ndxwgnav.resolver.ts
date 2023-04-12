import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { NdxwgnavService } from './ndxwgnav.service';
import { CreateNdxwgnavInput } from './dto/create-ndxwgnav.input';
import { UpdateNdxwgnavInput } from './dto/update-ndxwgnav.input';

@Resolver('Ndxwgnav')
export class NdxwgnavResolver {
  constructor(private readonly ndxwgnavService: NdxwgnavService) {}

  @Mutation('createNdxwgnav')
  create(@Args('createNdxwgnavInput') createNdxwgnavInput: CreateNdxwgnavInput) {
    return this.ndxwgnavService.create(createNdxwgnavInput);
  }

  @Query('ndxwgnav')
  findAll() {
    return this.ndxwgnavService.findAll();
  }

  @Query('ndxwgnav')
  findOne(@Args('id') id: number) {
    return this.ndxwgnavService.findOne(id);
  }

  @Mutation('updateNdxwgnav')
  update(@Args('updateNdxwgnavInput') updateNdxwgnavInput: UpdateNdxwgnavInput) {
    return this.ndxwgnavService.update(updateNdxwgnavInput.id, updateNdxwgnavInput);
  }

  @Mutation('removeNdxwgnav')
  remove(@Args('id') id: number) {
    return this.ndxwgnavService.remove(id);
  }
}
