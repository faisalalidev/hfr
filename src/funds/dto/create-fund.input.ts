import {ApiProperty} from "@nestjs/swagger";

export class CreateFundInput {
    @ApiProperty()
    fund_id: number;

    @ApiProperty()
    fund: string;


}
