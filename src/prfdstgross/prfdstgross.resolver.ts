import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PrfdstgrossService } from './prfdstgross.service';
import { CreatePrfdstgrossInput } from './dto/create-prfdstgross.input';
import { UpdatePrfdstgrossInput } from './dto/update-prfdstgross.input';

@Resolver('Prfdstgross')
export class PrfdstgrossResolver {
  constructor(private readonly prfdstgrossService: PrfdstgrossService) {}

  @Mutation('createPrfdstgross')
  create(@Args('createPrfdstgrossInput') createPrfdstgrossInput: CreatePrfdstgrossInput) {
    return this.prfdstgrossService.create(createPrfdstgrossInput);
  }

  @Query('prfdstgross')
  findAll() {
    return this.prfdstgrossService.findAll();
  }

  @Query('prfdstgross')
  findOne(@Args('id') id: number) {
    return this.prfdstgrossService.findOne(id);
  }

  @Mutation('updatePrfdstgross')
  update(@Args('updatePrfdstgrossInput') updatePrfdstgrossInput: UpdatePrfdstgrossInput) {
    return this.prfdstgrossService.update(updatePrfdstgrossInput.id, updatePrfdstgrossInput);
  }

  @Mutation('removePrfdstgross')
  remove(@Args('id') id: number) {
    return this.prfdstgrossService.remove(id);
  }
}
