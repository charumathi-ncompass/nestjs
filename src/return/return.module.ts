import { Module } from '@nestjs/common';
import { ReturnController } from './return.controller';
import { ReturnService } from './return.service';
import { Return } from 'src/return/entity/return.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Return]),],
  controllers: [ReturnController],
  providers: [ReturnService]
})
export class ReturnModule {}
