import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { UserResponseModel } from "src/shared/models/user.response.model";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy,"local") {
    constructor(private authService:AuthService){
        super({usernameField:'email'});
    }

    async validate(email:string, password:string): Promise<any>{
        var user = await this.authService.validateUser(email, password);
        if(user == null){
            throw new UnauthorizedException();
        }
        return user;
    }
}
