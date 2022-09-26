import { Module, ValidationPipe,} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_PIPE } from '@nestjs/core';
import { CustomersModule } from './customers/customers.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { FeedbackModule } from './feedback/feedback.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReturnModule } from './return/return.module';
import { ComplaintsModule } from './complaints/complaints.module';



@Module({
  imports: [
    ConfigModule.forRoot(
      {
        isGlobal: true,
        envFilePath: `.env.${process.env.NODE_ENV}`
        // envFilePath: '.env.development'
      }
    ), 

    TypeOrmModule.forRootAsync({
    inject: [ConfigService],
    useFactory: (config: ConfigService) => {
      return {
        type: 'mysql',
        database: config.get<string>('DB_NAME'),
        host: config.get<string>('HOST'),
        username: config.get<string>('USER'),
        password: config.get<string>('PASSWORD'),
        entities: ["./**/*.entity.js"],
        synchronize: false
      }
    }
  }), 
   CustomersModule,OrdersModule,ProductsModule,FeedbackModule, ReturnModule, ComplaintsModule,  
  ],

  controllers: [AppController],
  providers: [AppService ,ConfigService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
      }),
    },],
})


export class AppModule {}


