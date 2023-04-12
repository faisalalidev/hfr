import {ApiProperty} from "@nestjs/swagger";

export class CreateRegionInput {
    @ApiProperty()
    fund_id: number;

    @ApiProperty()
    fund: string;
}
