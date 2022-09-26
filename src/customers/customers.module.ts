import { Module } from '@nestjs/common';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { AuthService } from '../auth/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customers }  from './entity/customers.entity'
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../auth/jwt.strategy';
import { PassportModule } from "@nestjs/passport";
import { jwtConstants } from '../auth/constants';

@Module({
  imports: [TypeOrmModule.forFeature([Customers]),
 
PassportModule, JwtModule.register({
  secret: jwtConstants.secret
}),
  ],
  controllers: [CustomersController],
  providers: [CustomersService,AuthService,JwtStrategy]
})
export class CustomersModule {}
