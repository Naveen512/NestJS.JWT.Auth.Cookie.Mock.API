import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserResponseModel } from 'src/shared/models/user.response.model';
import { UserService } from 'src/users/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<UserResponseModel> {
    const user = await this.userService.find(email);
    if (user == null) {
      return null;
    }

    if (user.password !== password) {
      return null;
    }

    return {
      email: user.email,
      firstName: user.firstName,
      id: user.id,
      lastName: user.lastName,
      phone: user.phone,
    };
  }

  async getToken(user: UserResponseModel) {
    return this.jwtService.sign(user);
  }
}
