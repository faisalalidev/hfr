import {ApiProperty} from "@nestjs/swagger";

export class CreateReturnInput {
    @ApiProperty()
    fund_id: number;

    @ApiProperty()
    fund: string;
}
