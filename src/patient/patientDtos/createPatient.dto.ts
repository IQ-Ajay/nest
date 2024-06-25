import { ApiProperty } from "@nestjs/swagger";

export class CreatePatientDto {
    
    @ApiProperty()
    name: string;
    @ApiProperty()
    dob:Date;
    @ApiProperty({required:false})
    email?:string;
    @ApiProperty({required:false})
    phone?:string;
}