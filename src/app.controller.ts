import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import {Response} from 'express'

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Post('auth/login')
  @UseGuards(AuthGuard('local'))
  async login(@Req() req,@Res({passthrough:true}) res:Response) {
    const jwtToken = await this.authService.getToken(req.user);
    const secretData = {
      accessToken: jwtToken,
      refreshToken: "wCH7PEZy1AbvsASAPyM9qo7Bus3qqy"
    }
   
    res.cookie('auth-cookie', secretData,{
      httpOnly: true
    });
   
    // req.
    // req.coo
    return {msg:"success"};
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('liked-movies')
  likedMovies(){
    return ["Avengers EndGame", "The Lion King", "Harry Potter", "Sherlock Holmes"];
  }

  @UseGuards(AuthGuard('refresh-token'))
  @Get('refresh-token')
  async refreshToken(@Req() req,@Res({passthrough:true}) res:Response){
    const jwtToken = await this.authService.getToken(req.user);
    const secretData = {
      accessToken: jwtToken,
      refreshToken: "wCH7PEZy1AbvsASAPyM9qo7Bus3qqy"
    }
   
    res.cookie('auth-cookie', secretData,{
      httpOnly: true
    });
   
    // req.
    // req.coo
    return {msg:"success"};
  }
}
