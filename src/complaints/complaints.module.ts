import { Module } from '@nestjs/common';
import { ComplaintsController } from './complaints.controller';
import { ComplaintsService } from './complaints.service';
import {Complaints} from './entity/complaints.entity'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Complaints]),
],
  controllers: [ComplaintsController],
  providers: [ComplaintsService]
})
export class ComplaintsModule {}
