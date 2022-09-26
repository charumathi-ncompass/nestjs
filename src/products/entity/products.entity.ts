import { Entity, Column , PrimaryColumn} from "typeorm";

@Entity({name:'PRODUCTS'})
export class Products{
    @PrimaryColumn()
    PRODUCT_ID : Number;

    @Column()
    PRODUCT_NAME : string;

    @Column()
    PRODUCT_MODEL : string;

    @Column()
    AVAILABILITY : Number;

    @Column()
    RATING : Number;

    @Column()
    TYPE: string;

    @Column()
    PRODUCT_PRICE : Number;

}