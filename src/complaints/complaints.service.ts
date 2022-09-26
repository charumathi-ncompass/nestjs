import { Injectable,NotFoundException } from '@nestjs/common';
import { Complaints } from '../complaints/entity/complaints.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {Products} from 'src/products/entity/products.entity';
import{Customers} from 'src/customers/entity/customers.entity';
import { ComplaintsDto } from './dto/complaints.dto';

@Injectable()
export class ComplaintsService {

    constructor(@InjectRepository(Complaints) private complaintRepo :Repository<Complaints>,){}
   
    registerComplaint(body:ComplaintsDto){
         const complaint= this.complaintRepo.create(body);
         this.complaintRepo.save(complaint);
         return "Complaint registered successfully!!"
     }
     
     async getProductComplaint(body:Partial<ComplaintsDto>){            
          const PID=body.PID;          
          const productComplaint= await this.complaintRepo.createQueryBuilder('Complaints')
               .innerJoinAndMapOne('Complaints.Products',Products, 'Products', 'Complaints.PID=Products.PRODUCT_ID')
               .innerJoinAndMapOne('Complaints.Customers',Customers, 'Customers', 'Complaints.CUSTOMER_EMAIL=Customers. EMAIL')
               .select(["NAME","PRODUCT_NAME","COMPLAINT"])
               .where('PID=:PID',{PID})
               .getRawMany()
        
          if(productComplaint.length===0)
          {
              throw new NotFoundException('No complaints registered')
          }
         
          return productComplaint;
  
  
      }

      async updateComplaint(body:Partial<ComplaintsDto>){       
          const CID=body.CID;       
          const updateComplaint=await this.complaintRepo.createQueryBuilder()
          .update(Complaints)
          .set({ COMPLAINT: body.COMPLAINT })
          .where('CID=:CID',{CID})
          .updateEntity(true)
          .execute();
         
          if(updateComplaint.affected===0)
          {
              throw new NotFoundException('No complaints found to update!!');
          }
         
          return "Complaint updated successfully!!";
      }

      async deleteComplaint(CID:Partial<ComplaintsDto>){
          const deleteComplaint=await this.complaintRepo.createQueryBuilder()
          .delete() 
          .from(Complaints) 
          .where('CID=:CID',{CID}) 
          .execute();
          
          if(deleteComplaint.affected===0)
          {
              throw new NotFoundException('No complaints found to delete!!');
          }
        
          return "Complaint deleted successfully!!"
      }
     
  

}
