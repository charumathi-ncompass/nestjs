import {IsEmail,IsNumber,IsString} from 'class-validator'
export class FeedbackDto{
    @IsString() 
    FID:string;
    
    @IsEmail()
    CUSTOMER_EMAIL:string

    @IsNumber()
    PID:number

    @IsString()
    FEEDBACK:string= 'GOOD'||'BAD'||'AVERAGE';


  
    
}