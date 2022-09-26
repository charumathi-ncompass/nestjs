import { Controller, Get,Query,UseGuards,} from '@nestjs/common';
import { ProductsService } from './products.service';
import{ FilterDto}from './dto/filter.dto';
import { JwtAuthGuard } from '../auth/auth.guard';

@Controller('products')
export class ProductsController {
    constructor(private ProductsService:ProductsService,){}
    
    @Get('/getProductDetails')
    @UseGuards(JwtAuthGuard )
    getProductDetails(@Query() query:FilterDto){
       return this.ProductsService.getProductDetails(query);
     }
}
 
