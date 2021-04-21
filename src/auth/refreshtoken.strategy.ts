import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/users/user.service';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'refresh-token',
) {
  constructor(private userService: UserService) {
    super({
      ignoreExpiration: true,
      passReqToCallback:true,
      secretOrKey: 'My Secret Key Never Let Out Siders',
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          var data = request?.cookies['auth-cookie'];
          if (data == null) {
            return null;
          }
          return data.accessToken;
        },
      ]),
    });
  }

  async validate(req:Request, payload: any) {
   
    var data = req?.cookies['auth-cookie'];
    if (!data.refreshToken) {
      throw new UnauthorizedException();
    }
    if (payload == null) {
      throw new UnauthorizedException();
    }
    var user = await this.userService.find(payload.email);
    if (user == null) {
      throw new UnauthorizedException();
    }
    return {
      email: user.email,
      firstName: user.firstName,
      id: user.id,
      lastName: user.lastName,
      phone: user.phone,
    };
  }
}
