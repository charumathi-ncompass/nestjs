// import { CanActivate,ExecutionContext, NotFoundException} from '@nestjs/common';

// export class AuthGuard implements CanActivate{
//     canActivate(context: ExecutionContext) {
//        const request=context.switchToHttp().getRequest();
       
//        if(!request.session.userId)
//         {
//          throw new NotFoundException("Only signed in users can access");
//         }
        
//        return request.session.userId;
//     }

// } 

import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}