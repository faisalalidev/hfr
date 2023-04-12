import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TrakkerrorService } from './trakkerror.service';
import { CreateTrakkerrorInput } from './dto/create-trakkerror.input';
import { UpdateTrakkerrorInput } from './dto/update-trakkerror.input';

@Resolver('Trakkerror')
export class TrakkerrorResolver {
  constructor(private readonly trakkerrorService: TrakkerrorService) {}

  @Mutation('createTrakkerror')
  create(@Args('createTrakkerrorInput') createTrakkerrorInput: CreateTrakkerrorInput) {
    return this.trakkerrorService.create(createTrakkerrorInput);
  }

  @Query('trakkerror')
  findAll() {
    return this.trakkerrorService.findAll();
  }

  @Query('trakkerror')
  findOne(@Args('id') id: number) {
    return this.trakkerrorService.findOne(id);
  }

  @Mutation('updateTrakkerror')
  update(@Args('updateTrakkerrorInput') updateTrakkerrorInput: UpdateTrakkerrorInput) {
    return this.trakkerrorService.update(updateTrakkerrorInput.id, updateTrakkerrorInput);
  }

  @Mutation('removeTrakkerror')
  remove(@Args('id') id: number) {
    return this.trakkerrorService.remove(id);
  }
}
