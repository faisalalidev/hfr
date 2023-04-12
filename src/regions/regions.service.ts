import { Injectable } from '@nestjs/common';
import { CreateRegionInput } from './dto/create-region.input';
import { UpdateRegionInput } from './dto/update-region.input';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class RegionsService {

  constructor(private prisma: PrismaService) {}

  create(createRegionInput: CreateRegionInput) {
    return 'This action adds a new region';
  }

  findAll() {
    return this.prisma.regions.findMany();
  }

  findOne(id: number) {
    return this.prisma.regions.findUnique({ where: { id } });
  }

  update(id: number, updateRegionInput: UpdateRegionInput) {
    return `This action updates a #${id} region`;
  }

  remove(id: number) {
    return this.prisma.regions.delete({ where: { id } });
  }
}
