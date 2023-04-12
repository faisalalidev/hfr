import { Injectable } from '@nestjs/common';
import { CreateInstrumentInput } from './dto/create-instrument.input';
import { UpdateInstrumentInput } from './dto/update-instrument.input';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class InstrumentsService {

  constructor(private prisma: PrismaService) {}

  create(createInstrumentInput: CreateInstrumentInput) {
    return 'This action adds a new instrument';
  }

  findAll() {
    return this.prisma.instruments.findMany();
  }

  findOne(id: number) {
    return this.prisma.instruments.findUnique({ where: { id } });
  }

  update(id: number, updateInstrumentInput: UpdateInstrumentInput) {
    return `This action updates a #${id} instrument`;
  }

  remove(id: number) {
    return this.prisma.instruments.delete({ where: { id } });
  }
}
