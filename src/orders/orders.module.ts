import { Module,CacheModule } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customers }  from '../customers/entity/customers.entity'
import{Products} from '../products/entity/products.entity'
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from "@nestjs/passport";
import { jwtConstants } from '../auth/constants';
import { Orders } from './entity/orders.entity';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [TypeOrmModule.forFeature([Orders,Customers,Products]),
PassportModule, JwtModule.register({
  secret: jwtConstants.secret
}),
CacheModule.register({
  store:redisStore,
  host: 'localhost',
  port: 6379
})
],
  providers: [OrdersService,JwtService],
  controllers: [OrdersController]
})

// import { Module,CacheModule } from '@nestjs/common';
// import { OrdersService } from './orders.service';
// import { OrdersController } from './orders.controller';
// import { AuthService } from '../auth/auth.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Customers }  from '../entity/customers.entity'
// import{Products} from '../entity/products.entity'
// import { ConfigService } from '@nestjs/config';
// import { JwtModule } from '@nestjs/jwt';
// import { JwtStrategy } from '../auth/jwt.strategy';
// import { PassportModule } from "@nestjs/passport";
// import { jwtConstants } from '../auth/constants';
// import { Orders } from '../entity/orders.entity';
// import * as redisStore from 'cache-manager-redis-store';

// @Module({
//   imports: [TypeOrmModule.forFeature([Customers, Products,Orders]),
//     TypeOrmModule.forRootAsync({
//     inject: [ConfigService],
//     useFactory: (config: ConfigService) => {
//       return {
//         type: 'mysql',
//         database: config.get<string>('DB_NAME'),
//         host: config.get<string>('HOST'),
//         username: config.get<string>('USER'),
//         password: config.get<string>('PASSWORD'),
//         entities: [Customers, Products,Orders],
//         synchronize: false
//       }
//     }
//   }), 

//   PassportModule, JwtModule.register({
//     secret: jwtConstants.secret
//   }),
//   CacheModule.register({
//     store:redisStore,
//     host: 'localhost',
//     port: 6379
//   })
// ],
  
//  controllers:[ OrdersController],
//   providers: [OrdersService, AuthService,JwtStrategy]
// })
export class OrdersModule {}
