import { Injectable } from '@nestjs/common';
import { CreateReturnInput } from './dto/create-return.input';
import { UpdateReturnInput } from './dto/update-return.input';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class ReturnsService {

  constructor(private prisma: PrismaService) {}

  create(createReturnInput: CreateReturnInput) {
    return 'This action adds a new return';
  }

  findAll() {
    return this.prisma.returns.findMany();
  }

  findOne(id: number) {
    return this.prisma.returns.findUnique({ where: { id } });
  }

  update(id: number, updateReturnInput: UpdateReturnInput) {
    return `This action updates a #${id} return`;
  }

  remove(id: number) {
    return this.prisma.returns.delete({ where: { id } });
  }
}
