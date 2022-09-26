import { Entity, Column , PrimaryColumn} from "typeorm";

@Entity({name:'FEEDBACK'})
export class Feedback{
    @PrimaryColumn()
    FID:string;
 
    @Column()
    CUSTOMER_EMAIL:string;

    @Column()
    PID :number;

    @Column({
        type: 'enum',
        enum: ["GOOD", "BAD", "AVERAGE"],
        default: "GOOD"
      })
    FEEDBACK:string;

    
}