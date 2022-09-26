import { Controller ,Body,Get,Put,Post,Param,Patch,Delete} from '@nestjs/common';
import {CustomerDto} from './dtos/customer.dto';
import { ResponseDto} from './dtos/response.dto';
import { AuthService } from '../auth/auth.service';
import { CustomersService } from './customers.service';
import { Serialize } from './interceptors/serialize.interceptor';

@Controller('customers')
export class CustomersController {

    constructor(private authService:AuthService,private custService:CustomersService,){}

    @Serialize(ResponseDto)
    @Post('/signup')
    async createUser(@Body() body:CustomerDto){   
      return await this.authService.signup(body.ID,body.NAME,body.CONTACT,body.EMAIL,body.GENDER,body.ADDRESS,body.PASSWORD);           
      }
  
   
    @Post('/signin')
    async signin(@Body() body:Partial<CustomerDto>){     
      return await this.authService.signin(body);
    }

    @Delete('/deleteCustomer/:ID')
    async deleteCustomer(@Param() params:Partial<CustomerDto>){
     return await this.custService.deleteCustomer(params);
    }

    @Get('/getCustomerDetails')
    async getCustomerDetails()
    {
      return await this.custService.getCustomerDetails();
    }

   
 @Patch('/editCustomerDetails')
 updateCustomerDetails(@Body() body:Partial<CustomerDto>){
  return this.custService.updateCustomerDetails(body);
} 

}
