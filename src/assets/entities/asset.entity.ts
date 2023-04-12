import {ApiProperty} from "@nestjs/swagger";

export class Asset {
    @ApiProperty()
    id: number;

    @ApiProperty()
    fund_id: number;

    @ApiProperty()
    fund: string;

    @ApiProperty()
    fund_date: string;

    @ApiProperty()
    asset: number;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
