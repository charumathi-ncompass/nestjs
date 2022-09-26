import { Injectable,NotFoundException} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Customers} from './entity/customers.entity';
import { CustomerDto } from 'src/customers/dtos/customer.dto';

@Injectable()
export class CustomersService {

    constructor(@InjectRepository(Customers) private custRepo :Repository<Customers>,){}

    create(ID:string,NAME:string,CONTACT:string,EMAIL:string,GENDER:string,ADDRESS:string,PASSWORD:string){
      const user=this.custRepo.create({ ID, NAME, CONTACT, EMAIL, GENDER, ADDRESS,PASSWORD});
      return this.custRepo.save(user);
  }
     
       async find(EMAIL: string){
        return await this.custRepo.find({
            where :[{EMAIL}]      
          });
        }

      
        async deleteCustomer(params:Partial<CustomerDto>){
          
          const deleteCustomer=await this.custRepo.createQueryBuilder()
          .delete() 
          .from(Customers) 
          .where('ID=:ID',{ID:params.ID}) 
          .execute();
          
          if(deleteCustomer.affected===0)
          {
              throw new NotFoundException('No Customers found to delete!!');
          }
        
          return "Customers deleted successfully!!"
      }

      async getCustomerDetails(){
        const customerDetails = await this.custRepo.createQueryBuilder()
        .select(["ID","NAME","EMAIL","CONTACT","GENDER","ADDRESS"])
        .getRawMany();
        return customerDetails;
      }
      async getUserById(ID:string) {
        
        const user = this.custRepo.findOne({
            where: [{ "ID": ID }],            
        });

        return user;
    }
      updateCustomerDetails(body:Partial<CustomerDto>){       
  
        const updateCustomerDetails=this.custRepo.createQueryBuilder()
        .update(Customers)
        .set(body)
        .where('ID=:ID',{ID:body.ID}) 
        .updateEntity(true)
        .execute();
       
       
        return updateCustomerDetails;
    }



}
