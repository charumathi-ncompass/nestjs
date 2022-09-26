import { Injectable,NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {Return} from './entity/return.entity'
import { Products } from 'src/products/entity/products.entity';
import {Orders} from 'src/orders/entity/orders.entity';

@Injectable()
export class ReturnService {
    constructor(@InjectRepository(Return) private returnRepo :Repository<Return>,){}


    async getReturnedProduct(CUSTOMER_EMAIL:string){   
       const returnDetails= await this.returnRepo.createQueryBuilder('Returns')
        .innerJoinAndMapOne('Returns.Orders', Orders, 'Orders', 'Returns.OID = Orders.OID')
        .innerJoinAndMapOne('Orders.Products', Products, 'Products', 'Products.PRODUCT_ID=Orders.PID')
        .select(["PRODUCT_ID","PRODUCT_NAME"," PDATE "," RDATE "])
        .where('Orders.CUSTOMER_EMAIL=:CUSTOMER_EMAIL', {CUSTOMER_EMAIL})
        .getRawMany();

      if(returnDetails.length==0){
            throw new NotFoundException('Return data for the user is not found')
      }
      return returnDetails;
    }
    
}
