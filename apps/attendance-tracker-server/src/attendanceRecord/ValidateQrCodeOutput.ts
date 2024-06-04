import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("ValidateQrCodeOutputObject")
class ValidateQrCodeOutput {
    @Field(() => Boolean)
    @ApiProperty({
        required: true,
        type: () => Boolean
    })
    @Type(() => Boolean)
    validationStatus!: boolean;
}

export { ValidateQrCodeOutput as ValidateQrCodeOutput };