import {BadRequestException, Injectable, NotFoundException} from  '@nestjs/common'
import {CustomersService } from '../customers/customers.service';
import { randomBytes,scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
const scrypt =promisify(_scrypt);
import { JwtService } from '@nestjs/jwt';
import { CustomerDto } from 'src/customers/dtos/customer.dto';

@Injectable()
export class AuthService{
    constructor(private CustomersService:CustomersService,private jwtService:JwtService){}

    async signup( ID:string,NAME:string,CONTACT:string,EMAIL:string,GENDER:string,ADDRESS:string,PASSWORD:string){
        const users=await this.CustomersService.find(EMAIL);
        if(users.length){
            throw new BadRequestException('Email already in use');
        }
         const salt=randomBytes(8).toString('hex');
         const hash=(await scrypt(PASSWORD,salt,32)) as Buffer;
         const result=salt +'.'+hash.toString('hex');
         const user =await this.CustomersService.create(ID,NAME,CONTACT,EMAIL,GENDER,ADDRESS,result);
         return user;
    }
    
    async signin(body:Partial<CustomerDto>){

        const [User]=await this.CustomersService.find(body.EMAIL);
        if(!User){
            throw new NotFoundException('User not found');
        }
        const [salt,storedhash]=User.PASSWORD.split('.');
        const hash = (await scrypt(body.PASSWORD,salt,32)) as Buffer;
        if(storedhash !== hash.toString('hex')){
            throw new BadRequestException('Wrong password');
        }        
        const token =this.jwtService.sign(body.EMAIL)
        return {
            access_token: token,
        }
    
    }

    
}