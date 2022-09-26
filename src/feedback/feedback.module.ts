import { Module } from '@nestjs/common';
import { FeedbackController } from './feedback.controller';
import { FeedbackService } from './feedback.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feedback} from './entity/feedback.entity'




@Module({
  imports: [TypeOrmModule.forFeature([Feedback]),
 ],
  controllers: [FeedbackController],
  providers: [FeedbackService]
})
export class FeedbackModule {}
