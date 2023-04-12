import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ReturnsService } from './returns.service';
import { CreateReturnInput } from './dto/create-return.input';
import { UpdateReturnInput } from './dto/update-return.input';

@Resolver('Return')
export class ReturnsResolver {
  constructor(private readonly returnsService: ReturnsService) {}

  @Mutation('createReturn')
  create(@Args('createReturnInput') createReturnInput: CreateReturnInput) {
    return this.returnsService.create(createReturnInput);
  }

  @Query('returns')
  findAll() {
    return this.returnsService.findAll();
  }

  @Query('return')
  findOne(@Args('id') id: number) {
    return this.returnsService.findOne(id);
  }

  @Mutation('updateReturn')
  update(@Args('updateReturnInput') updateReturnInput: UpdateReturnInput) {
    return this.returnsService.update(updateReturnInput.id, updateReturnInput);
  }

  @Mutation('removeReturn')
  remove(@Args('id') id: number) {
    return this.returnsService.remove(id);
  }
}
