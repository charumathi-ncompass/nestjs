import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import{Products} from './entity/products.entity'


@Injectable()
export class ProductsService {

    constructor(
                @InjectRepository(Products) private prodRepo :Repository<Products>,
               ){}

    async getProductDetails({RATING,TYPE,LIMIT,OFFSET,sortCol,sortType}){
        return await this.prodRepo.createQueryBuilder()
        .select(["PRODUCT_ID","PRODUCT_NAME","RATING","AVAILABILITY","TYPE"])
        .where('TYPE=:TYPE',{TYPE})
        .andWhere('RATING =:RATING',{RATING})
        .orderBy(sortCol,sortType)
        .limit(LIMIT)
        .offset(OFFSET)
        .getRawMany()
    }
}
