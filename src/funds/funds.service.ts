import { Injectable } from '@nestjs/common';
import { CreateFundInput } from './dto/create-fund.input';
import { UpdateFundInput } from './dto/update-fund.input';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class FundsService {

  constructor(private prisma: PrismaService) {}

  create(createFundInput: CreateFundInput) {
    return 'This action adds a new fund';
  }

  findAll() {
    return this.prisma.fund.findMany();
  }

  findOne(id: number) {
    return this.prisma.fund.findUnique({ where: { id } });
  }

  update(id: number, updateFundInput: UpdateFundInput) {
    return `This action updates a #${id} fund`;
  }

  remove(id: number) {
    return this.prisma.fund.delete({ where: { id } });
  }
}
