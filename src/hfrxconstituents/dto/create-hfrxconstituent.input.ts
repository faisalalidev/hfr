import {ApiProperty} from "@nestjs/swagger";

export class CreateHfrxconstituentInput {
    @ApiProperty()
    fund_id: number;

    @ApiProperty()
    fund: string;
}
