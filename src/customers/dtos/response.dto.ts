import { Exclude, Expose } from 'class-transformer';

export class ResponseDto {
  @Expose()
  ID: number;
  
  @Expose()
  NAME: string;
  
  @Expose()
  EMAIL: string;

  @Expose()
  GENDER:string

  @Expose()
  ADDRESS:string

  // @Exclude()
  // PASSWORD: string;
}