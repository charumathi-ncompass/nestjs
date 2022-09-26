import { Controller,Body,Post,Param,Delete ,Get, UseGuards} from '@nestjs/common';
import {ComplaintsService} from './complaints.service';
import { ComplaintsDto } from 'src/complaints/dto/complaints.dto';
import { JwtAuthGuard} from '../auth/auth.guard'

@Controller('complaints')
export class ComplaintsController {

    constructor(private ComplaintsService:ComplaintsService,){}

    @Post('/registerComplaint')
    registerComplaint(@Body() body: ComplaintsDto){     
        return this.ComplaintsService.registerComplaint(body);        
      }

      
      @Get('/getProductComplaint')
      async getProductFeedback(@Body() body:Partial<ComplaintsDto>){
        return await this.ComplaintsService.getProductComplaint(body);       
      }
     
      @UseGuards(JwtAuthGuard)
      @Post('/updateComplaint')
        async updateComplaint(@Body() body:Partial<ComplaintsDto>){
          return await this.ComplaintsService.updateComplaint(body);
        } 
        
        @UseGuards(JwtAuthGuard)
        @Delete('/deleteComplaint/:CID')
        async deleteComplaint(@Param('CID') CID:Partial<ComplaintsDto>){
         return await this.ComplaintsService.deleteComplaint(CID);
        }
      

}
