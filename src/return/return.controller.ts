import { Controller,Get,Body} from '@nestjs/common';
import {ReturnService} from './return.service';
import { ReturnDto } from './dto/return.dto';
@Controller('return')
export class ReturnController {

    constructor(private ReturnService:ReturnService){}

    @Get('/getReturnedProduct')
        getReturnedProduct(@Body() body:Partial<ReturnDto>){
        return this.ReturnService.getReturnedProduct(body.CUSTOMER_EMAIL);
    }

}
