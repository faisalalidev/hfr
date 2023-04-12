import { Injectable } from '@nestjs/common';
import { CreateHfriconstituentInput } from './dto/create-hfriconstituent.input';
import { UpdateHfriconstituentInput } from './dto/update-hfriconstituent.input';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class HfriconstituentsService {

  constructor(private prisma: PrismaService) {}

  create(createHfriconstituentInput: CreateHfriconstituentInput) {
    return 'This action adds a new hfriconstituent';
  }

  findAll() {
    return this.prisma.hFRIConstituents.findMany();
  }

  findOne(id: number) {
    return this.prisma.hFRIConstituents.findUnique({ where: { id } });
  }

  update(id: number, updateHfriconstituentInput: UpdateHfriconstituentInput) {
    return `This action updates a #${id} hfriconstituent`;
  }

  remove(id: number) {
    return this.prisma.hFRIConstituents.delete({ where: { id } });
  }
}
