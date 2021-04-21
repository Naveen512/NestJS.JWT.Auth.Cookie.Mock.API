import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import {json, Request} from 'express';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,"jwt") {
  constructor() {
    super({
      ignoreExpiration: false,
      secretOrKey: 'My Secret Key Never Let Out Siders',
      jwtFromRequest: ExtractJwt.fromExtractors([(request: Request) => {
        var data = request?.cookies["auth-cookie"];
        if(data == null){
            return null;
        }
        ;
        return data.accessToken;
      }]),
    });
  }

  async validate(payload:any){
    if(payload == null){
        throw new UnauthorizedException();
    }
    return payload
  }
}
