import { Entity, Column , PrimaryColumn} from "typeorm";
@Entity({ name: "CUSTOMER_ORDERS"})
export class Orders {
    @Column()
    CUSTOMER_EMAIL: string
    
    @Column()
    PRODUCT_ID: string
    
    @PrimaryColumn()
    OID: string

}