import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { InstrumentsService } from './instruments.service';
import { CreateInstrumentInput } from './dto/create-instrument.input';
import { UpdateInstrumentInput } from './dto/update-instrument.input';

@Resolver('Instrument')
export class InstrumentsResolver {
  constructor(private readonly instrumentsService: InstrumentsService) {}

  @Mutation('createInstrument')
  create(@Args('createInstrumentInput') createInstrumentInput: CreateInstrumentInput) {
    return this.instrumentsService.create(createInstrumentInput);
  }

  @Query('instruments')
  findAll() {
    return this.instrumentsService.findAll();
  }

  @Query('instrument')
  findOne(@Args('id') id: number) {
    return this.instrumentsService.findOne(id);
  }

  @Mutation('updateInstrument')
  update(@Args('updateInstrumentInput') updateInstrumentInput: UpdateInstrumentInput) {
    return this.instrumentsService.update(updateInstrumentInput.id, updateInstrumentInput);
  }

  @Mutation('removeInstrument')
  remove(@Args('id') id: number) {
    return this.instrumentsService.remove(id);
  }
}
