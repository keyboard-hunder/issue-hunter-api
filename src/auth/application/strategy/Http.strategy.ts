import { Strategy } from 'passport-http-bearer';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../oauth/Auth.service';
import { User } from '../../../user/domain/user/User';

@Injectable()
export class HttpStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService,
  ) {
    super();
  }

  async validate(token: string): Promise<User> {
    const user = await this.authService.validateUser(token);
    if (user === null) {
      throw new UnauthorizedException();
    }
    return user;
  }

}
