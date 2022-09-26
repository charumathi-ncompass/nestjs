import {IsDate,  IsEmail,IsString} from 'class-validator'

export class ReturnDto{
    @IsString()
    RID :string;

    @IsEmail()
    CUSTOMER_EMAIL:string

    @IsString()
    OID :string;

    @IsDate()
    PDATE :Date;

    @IsDate()
    RDATE :Date;
    
}