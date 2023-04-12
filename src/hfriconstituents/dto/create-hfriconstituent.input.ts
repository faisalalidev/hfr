import {ApiProperty} from "@nestjs/swagger";

export class CreateHfriconstituentInput {
    @ApiProperty()
    fund_id: number;

    @ApiProperty()
    fund: string;
}
