import { Injectable ,NotFoundException} from '@nestjs/common';
import{ Feedback} from './entity/feedback.entity'
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {Products} from '../products/entity/products.entity'
import {FeedbackDto} from './dto/feedback.dto'
@Injectable()
export class FeedbackService {
    constructor(@InjectRepository(Feedback) private feedbackRepo :Repository<Feedback>,){}
   
    registerFeedback(body:FeedbackDto)
        {
        const feedback=this.feedbackRepo.create(body);
        this.feedbackRepo.save(feedback);
        return "Thankyou for your feedback!!"
        }

    async getProductFeedback(PID:number){   
        const productFeedback= await this.feedbackRepo.createQueryBuilder('Feedback')
                    .innerJoinAndMapOne('Feedback.Products',Products, 'Products', 'Feedback.PID=Products.PRODUCT_ID')
                    .select(["CUSTOMER_EMAIL","PRODUCT_NAME","PRODUCT_MODEL","FEEDBACK"])
                    .where('PID=:PID',{PID})
                    .getRawMany()
      
        if(productFeedback.length===0)
        {
            throw new NotFoundException('product feedback not found')
        }
       
        return productFeedback;
    }

}
