import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserlogintrackingService } from './userlogintracking.service';
import { CreateUserlogintrackingInput } from './dto/create-userlogintracking.input';
import { UpdateUserlogintrackingInput } from './dto/update-userlogintracking.input';

@Resolver('Userlogintracking')
export class UserlogintrackingResolver {
  constructor(private readonly userlogintrackingService: UserlogintrackingService) {}

  @Mutation('createUserlogintracking')
  create(@Args('createUserlogintrackingInput') createUserlogintrackingInput: CreateUserlogintrackingInput) {
    return this.userlogintrackingService.create(createUserlogintrackingInput);
  }

  @Query('userlogintracking')
  findAll() {
    return this.userlogintrackingService.findAll();
  }

  @Query('userlogintracking')
  findOne(@Args('id') id: number) {
    return this.userlogintrackingService.findOne(id);
  }

  @Mutation('updateUserlogintracking')
  update(@Args('updateUserlogintrackingInput') updateUserlogintrackingInput: UpdateUserlogintrackingInput) {
    return this.userlogintrackingService.update(updateUserlogintrackingInput.id, updateUserlogintrackingInput);
  }

  @Mutation('removeUserlogintracking')
  remove(@Args('id') id: number) {
    return this.userlogintrackingService.remove(id);
  }
}
