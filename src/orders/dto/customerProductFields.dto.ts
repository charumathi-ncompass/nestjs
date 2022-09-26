import { IsOptional } from 'class-validator';
export class customerProductFields{

    @IsOptional()
    ID:number;

    @IsOptional()
    NAME:string;

    @IsOptional()
    CONTACT:string;

    @IsOptional()
    EMAIL:string;

    @IsOptional()
    GENDER:string;
    
    @IsOptional()
    ADDRESS:string;
    
    @IsOptional()
    PASSWORD:string;
    
    @IsOptional()
    PRODUCT_ID : Number;
    
    @IsOptional()
    PRODUCT_NAME : string;
    
    @IsOptional()
    PRODUCT_MODEL : string;
    
    @IsOptional()
    AVAILABILITY : Number;
    
    @IsOptional()
    RATING : Number;
    
    @IsOptional()
    TYPE: string;
    
    @IsOptional()
    PRODUCT_PRICE : Number;
    
    @IsOptional()
    CUSTOMER_EMAIL:string;
    
    @IsOptional()
    P_ID:number;
}