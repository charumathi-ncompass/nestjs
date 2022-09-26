import { Controller, Request,Get,Query,UseGuards,CACHE_MANAGER,Inject } from '@nestjs/common';
import { OrdersService } from './orders.service';
import {customerProductFields} from './dto/customerProductFields.dto'
import {Cache} from 'cache-manager';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthGuard } from '../auth/auth.guard';

@Controller('orders')
export class OrdersController {
    constructor(private OrdersService:OrdersService,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,private jwtService : JwtService){}

        @UseGuards(JwtAuthGuard)
        @Get('/getOrderDetails')
        async getOrderDetails(@Query() query:Partial<customerProductFields>, @Request() req){
        
         const redisValue = await this.cacheManager.get('key');
       
         if( redisValue ){
           console.log("From redis")
           return redisValue ;      
         }
     
         const bearerHeader = req.headers["authorization"];
         const token = bearerHeader.split(' ')[1];
         const email = this.jwtService.decode(token);
         const orderInfo = await this.OrdersService.getOrderDetails(query,email);
   
         await this.cacheManager.reset();
         await this.cacheManager.set('key', orderInfo,{ttl:30});
         console.log("From DB")
         return orderInfo;
        }
       

}
