import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DatesService } from './dates.service';
import { CreateDateInput } from './dto/create-date.input';
import { UpdateDateInput } from './dto/update-date.input';

@Resolver('Date')
export class DatesResolver {
  constructor(private readonly datesService: DatesService) {}

  @Mutation('createDate')
  create(@Args('createDateInput') createDateInput: CreateDateInput) {
    return this.datesService.create(createDateInput);
  }

  @Query('dates')
  findAll() {
    return this.datesService.findAll();
  }

  @Query('date')
  findOne(@Args('id') id: number) {
    return this.datesService.findOne(id);
  }

  @Mutation('updateDate')
  update(@Args('updateDateInput') updateDateInput: UpdateDateInput) {
    return this.datesService.update(updateDateInput.id, updateDateInput);
  }

  @Mutation('removeDate')
  remove(@Args('id') id: number) {
    return this.datesService.remove(id);
  }
}
