import {IsEmail,IsNumber,IsOptional,IsString} from 'class-validator'
export class CustomerDto{
    @IsString() 
    ID:string;
  
    @IsString()
    NAME:string;

    @IsString()
    CONTACT:string;
 
    @IsEmail()
    EMAIL:string

    @IsString()
    GENDER:string
  
    @IsString()
    ADDRESS:string
    @IsOptional()
    @IsString()
    PASSWORD:string
  
    // @IsString()
    // result:string
}