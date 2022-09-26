import { Entity, Column , PrimaryColumn, ManyToOne} from "typeorm";
import {Customers} from '../../customers/entity/customers.entity'

@Entity({name:'COMPLAINTS',synchronize: false})
export class Complaints{
    @PrimaryColumn()
    CID:string;
 
    @Column()
    CUSTOMER_EMAIL:string;

    @Column()
    PID :number;

    @Column()
    COMPLAINT:string;

    // @ManyToOne(() => Customers, (Customers) => Customers.Complaints) 
    // Customers: Customers 

    
}