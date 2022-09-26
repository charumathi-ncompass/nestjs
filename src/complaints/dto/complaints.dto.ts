 
import {IsEmail,IsNumber,IsString} from 'class-validator'
export class ComplaintsDto{
    @IsString() 
    CID:string;
    
    @IsEmail()
    CUSTOMER_EMAIL:string

    @IsNumber()
    PID:number

    @IsString()  
    COMPLAINT:string;
    
}