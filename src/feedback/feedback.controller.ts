import { Controller,Post,Body, Get,Query } from '@nestjs/common';
import { FeedbackDto } from 'src/feedback/dto/feedback.dto';
import { FeedbackService } from './feedback.service';

@Controller('feedback')
export class FeedbackController {

    constructor(private feedbackService:FeedbackService,){}
    
    @Post('/registerFeedback')
      registerFeedback(@Body() body:FeedbackDto){
     
        return this.feedbackService.registerFeedback(body);    
       
      }

      @Get('/getProductFeedback')
      async getProductFeedback(@Body() body:Partial<FeedbackDto>){
        return await this.feedbackService.getProductFeedback(body.PID);    
    
      }
}
