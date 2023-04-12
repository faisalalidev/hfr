import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RmsiteconfigService } from './rmsiteconfig.service';
import { CreateRmsiteconfigInput } from './dto/create-rmsiteconfig.input';
import { UpdateRmsiteconfigInput } from './dto/update-rmsiteconfig.input';

@Resolver('Rmsiteconfig')
export class RmsiteconfigResolver {
  constructor(private readonly rmsiteconfigService: RmsiteconfigService) {}

  @Mutation('createRmsiteconfig')
  create(@Args('createRmsiteconfigInput') createRmsiteconfigInput: CreateRmsiteconfigInput) {
    return this.rmsiteconfigService.create(createRmsiteconfigInput);
  }

  @Query('rmsiteconfig')
  findAll() {
    return this.rmsiteconfigService.findAll();
  }

  @Query('rmsiteconfig')
  findOne(@Args('id') id: number) {
    return this.rmsiteconfigService.findOne(id);
  }

  @Mutation('updateRmsiteconfig')
  update(@Args('updateRmsiteconfigInput') updateRmsiteconfigInput: UpdateRmsiteconfigInput) {
    return this.rmsiteconfigService.update(updateRmsiteconfigInput.id, updateRmsiteconfigInput);
  }

  @Mutation('removeRmsiteconfig')
  remove(@Args('id') id: number) {
    return this.rmsiteconfigService.remove(id);
  }
}
