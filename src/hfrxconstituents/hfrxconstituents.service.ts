import { Injectable } from '@nestjs/common';
import { CreateHfrxconstituentInput } from './dto/create-hfrxconstituent.input';
import { UpdateHfrxconstituentInput } from './dto/update-hfrxconstituent.input';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class HfrxconstituentsService {

  constructor(private prisma: PrismaService) {}

  create(createHfrxconstituentInput: CreateHfrxconstituentInput) {
    return 'This action adds a new hfrxconstituent';
  }

  findAll() {
    return this.prisma.hFRXConstituents.findMany();
  }

  findOne(id: number) {
    return this.prisma.hFRXConstituents.findUnique({ where: { id } });
  }

  update(id: number, updateHfrxconstituentInput: UpdateHfrxconstituentInput) {
    return `This action updates a #${id} hfrxconstituent`;
  }

  remove(id: number) {
    return this.prisma.hFRXConstituents.delete({ where: { id } });
  }
}
