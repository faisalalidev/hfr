import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FundsService } from './funds.service';
import { CreateFundInput } from './dto/create-fund.input';
import { UpdateFundInput } from './dto/update-fund.input';

@Resolver('Fund')
export class FundsResolver {
  constructor(private readonly fundsService: FundsService) {}

  @Mutation('createFund')
  create(@Args('createFundInput') createFundInput: CreateFundInput) {
    return this.fundsService.create(createFundInput);
  }

  @Query('funds')
  findAll() {
    return this.fundsService.findAll();
  }

  @Query('fund')
  findOne(@Args('id') id: number) {
    return this.fundsService.findOne(id);
  }

  @Mutation('updateFund')
  update(@Args('updateFundInput') updateFundInput: UpdateFundInput) {
    return this.fundsService.update(updateFundInput.id, updateFundInput);
  }

  @Mutation('removeFund')
  remove(@Args('id') id: number) {
    return this.fundsService.remove(id);
  }
}
