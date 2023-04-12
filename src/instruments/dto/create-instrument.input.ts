import {ApiProperty} from "@nestjs/swagger";

export class CreateInstrumentInput {
    @ApiProperty()
    fund_id: number;

    @ApiProperty()
    fund: string;
}
