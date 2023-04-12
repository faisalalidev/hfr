import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DailyhfrxperformanceService } from './dailyhfrxperformance.service';
import { CreateDailyhfrxperformanceInput } from './dto/create-dailyhfrxperformance.input';
import { UpdateDailyhfrxperformanceInput } from './dto/update-dailyhfrxperformance.input';

@Resolver('Dailyhfrxperformance')
export class DailyhfrxperformanceResolver {
  constructor(private readonly dailyhfrxperformanceService: DailyhfrxperformanceService) {}

  @Mutation('createDailyhfrxperformance')
  create(@Args('createDailyhfrxperformanceInput') createDailyhfrxperformanceInput: CreateDailyhfrxperformanceInput) {
    return this.dailyhfrxperformanceService.create(createDailyhfrxperformanceInput);
  }

  @Query('dailyhfrxperformance')
  findAll() {
    return this.dailyhfrxperformanceService.findAll();
  }

  @Query('dailyhfrxperformance')
  findOne(@Args('id') id: number) {
    return this.dailyhfrxperformanceService.findOne(id);
  }

  @Mutation('updateDailyhfrxperformance')
  update(@Args('updateDailyhfrxperformanceInput') updateDailyhfrxperformanceInput: UpdateDailyhfrxperformanceInput) {
    return this.dailyhfrxperformanceService.update(updateDailyhfrxperformanceInput.id, updateDailyhfrxperformanceInput);
  }

  @Mutation('removeDailyhfrxperformance')
  remove(@Args('id') id: number) {
    return this.dailyhfrxperformanceService.remove(id);
  }
}
