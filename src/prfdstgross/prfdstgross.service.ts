import { Injectable } from '@nestjs/common';
import { CreatePrfdstgrossInput } from './dto/create-prfdstgross.input';
import { UpdatePrfdstgrossInput } from './dto/update-prfdstgross.input';

@Injectable()
export class PrfdstgrossService {
  create(createPrfdstgrossInput: CreatePrfdstgrossInput) {
    return 'This action adds a new prfdstgross';
  }

  findAll() {
    return `This action returns all prfdstgross`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prfdstgross`;
  }

  update(id: number, updatePrfdstgrossInput: UpdatePrfdstgrossInput) {
    return `This action updates a #${id} prfdstgross`;
  }

  remove(id: number) {
    return `This action removes a #${id} prfdstgross`;
  }
}
