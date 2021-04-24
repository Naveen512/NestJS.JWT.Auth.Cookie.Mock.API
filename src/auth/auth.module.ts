import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/users/user.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { RefreshTokenStrategy } from './refreshtoken.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: 'My Secret Key Never Let Out Siders',
      signOptions: {
        expiresIn: '600s',
      },
    }),
    UserModule,
    PassportModule,
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, RefreshTokenStrategy],
  exports: [AuthService],
})
export class AuthModule {}
