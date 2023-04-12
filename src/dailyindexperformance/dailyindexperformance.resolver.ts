import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DailyindexperformanceService } from './dailyindexperformance.service';
import { CreateDailyindexperformanceInput } from './dto/create-dailyindexperformance.input';
import { UpdateDailyindexperformanceInput } from './dto/update-dailyindexperformance.input';

@Resolver('Dailyindexperformance')
export class DailyindexperformanceResolver {
  constructor(private readonly dailyindexperformanceService: DailyindexperformanceService) {}

  @Mutation('createDailyindexperformance')
  create(@Args('createDailyindexperformanceInput') createDailyindexperformanceInput: CreateDailyindexperformanceInput) {
    return this.dailyindexperformanceService.create(createDailyindexperformanceInput);
  }

  @Query('dailyindexperformance')
  findAll() {
    return this.dailyindexperformanceService.findAll();
  }

  @Query('dailyindexperformance')
  findOne(@Args('id') id: number) {
    return this.dailyindexperformanceService.findOne(id);
  }

  @Mutation('updateDailyindexperformance')
  update(@Args('updateDailyindexperformanceInput') updateDailyindexperformanceInput: UpdateDailyindexperformanceInput) {
    return this.dailyindexperformanceService.update(updateDailyindexperformanceInput.id, updateDailyindexperformanceInput);
  }

  @Mutation('removeDailyindexperformance')
  remove(@Args('id') id: number) {
    return this.dailyindexperformanceService.remove(id);
  }
}
