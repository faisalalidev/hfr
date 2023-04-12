import { Injectable } from '@nestjs/common';
import { CreateAssetInput } from './dto/create-asset.input';
import { UpdateAssetInput } from './dto/update-asset.input';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class AssetsService {

  constructor(private prisma: PrismaService) {}

  create(createAssetInput: CreateAssetInput) {
    //return this.prisma.assets.create({ data: createAssetInput });
    return 'This action adds a new fund';
  }

  findAll() {
    return this.prisma.assets.findMany();
  }

  findOne(id: number) {
    return this.prisma.assets.findUnique({ where: { id } });
  }

  update(id: number, updateAssetInput: UpdateAssetInput) {
    //return this.prisma.assets.update({where: { id },data: updateAssetInput});
    return `This action updates a #${id} fund`;
  }

  remove(id: number) {
    return this.prisma.assets.delete({ where: { id } });
  }
}
