import { IsOptional } from 'class-validator';

export class FilterDto{
    @IsOptional()
    RATING:number=5;

    @IsOptional()
    TYPE:string ='PHONE';

    @IsOptional()
    LIMIT:number=5;

    
    @IsOptional()
    OFFSET:number=0;

    @IsOptional()
    sortCol:string='PRODUCT_NAME';

    @IsOptional()
    sortType:string='ASC';
}