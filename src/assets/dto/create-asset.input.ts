import {ApiProperty} from "@nestjs/swagger";

export class CreateAssetInput {
    @ApiProperty()
    fund_id: number;

    @ApiProperty()
    fund: string;

    @ApiProperty()
    fund_date: string;

    @ApiProperty()
    asset: string;
}
