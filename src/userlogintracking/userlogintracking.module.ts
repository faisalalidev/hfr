import { Module } from '@nestjs/common';
import { UserlogintrackingService } from './userlogintracking.service';
import { UserlogintrackingResolver } from './userlogintracking.resolver';

@Module({
  providers: [UserlogintrackingResolver, UserlogintrackingService]
})
export class UserlogintrackingModule {}
