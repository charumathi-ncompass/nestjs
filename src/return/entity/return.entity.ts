import { Entity, Column , PrimaryColumn, ManyToOne} from "typeorm";
import { Customers } from "src/customers/entity/customers.entity";
@Entity({name:'RETURNED_ORDERS'})
export class Return{
    @PrimaryColumn() 
    RID :string;

    @Column()
    CUSTOMER_EMAIL:string

    @Column()
    OID :string;

    @Column()
    PDATE :Date;

    @Column()
    RDATE :Date;
   
    @ManyToOne(() => Customers, (Customers) => Customers.Return) 
    Customers: Customers 
 
    
}




