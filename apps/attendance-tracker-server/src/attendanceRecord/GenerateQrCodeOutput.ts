import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("GenerateQrCodeOutputObject")
class GenerateQrCodeOutput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    qrCode!: string;

    @Field(() => Date)
    @Type(() => Date)
    qrCodeExpiration!: Date;
}

export { GenerateQrCodeOutput as GenerateQrCodeOutput };