import { Injectable} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Customers} from '../customers/entity/customers.entity';
import{Products} from '../products/entity/products.entity'
import {Orders} from './entity/orders.entity'

@Injectable()
export class OrdersService {
    constructor(
@InjectRepository(Customers) private CustRepo :Repository<Customers>){}

    async getOrderDetails(query,email){
        return this.CustRepo.createQueryBuilder('Customers')
        .innerJoinAndMapOne('Customers.Orders', Orders, 'Orders', 'Customers.EMAIL = Orders.CUSTOMER_EMAIL')
        .innerJoinAndMapOne('Orders.Products', Products, 'Products', 'Products.PRODUCT_ID=Orders.PID')
        .select(query.values)
        .where('Customers.EMAIL = :email', { email: email })
        .getRawMany();
    }
}
