import { Entity, Column , PrimaryColumn, OneToMany} from "typeorm";
// import { Complaints } from "src/complaints/entity/complaints.entity";
import {Return} from '../../return/entity/return.entity'

@Entity({name:'customers',synchronize:false})
export class Customers{
    @PrimaryColumn() 
    ID:string;

    @Column()
    NAME:string;

    @Column()
    CONTACT:string;

    @Column()
    EMAIL:string

    @Column()
    GENDER:string

    @Column()
    ADDRESS:string

    @Column()
    PASSWORD:string

    @OneToMany(() => Return, (Return) => Return.Customers)
    Return:Return;

    
}




