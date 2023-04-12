import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TrakkernavService } from './trakkernav.service';
import { CreateTrakkernavInput } from './dto/create-trakkernav.input';
import { UpdateTrakkernavInput } from './dto/update-trakkernav.input';

@Resolver('Trakkernav')
export class TrakkernavResolver {
  constructor(private readonly trakkernavService: TrakkernavService) {}

  @Mutation('createTrakkernav')
  create(@Args('createTrakkernavInput') createTrakkernavInput: CreateTrakkernavInput) {
    return this.trakkernavService.create(createTrakkernavInput);
  }

  @Query('trakkernav')
  findAll() {
    return this.trakkernavService.findAll();
  }

  @Query('trakkernav')
  findOne(@Args('id') id: number) {
    return this.trakkernavService.findOne(id);
  }

  @Mutation('updateTrakkernav')
  update(@Args('updateTrakkernavInput') updateTrakkernavInput: UpdateTrakkernavInput) {
    return this.trakkernavService.update(updateTrakkernavInput.id, updateTrakkernavInput);
  }

  @Mutation('removeTrakkernav')
  remove(@Args('id') id: number) {
    return this.trakkernavService.remove(id);
  }
}
