import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

import { User } from '../../../user/domain/user/User';
import { ConfigService } from '../../../config/application/Config.service';

export interface SignInformation {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class JwtService {

  constructor(
    private readonly configService: ConfigService,
  ) {}

  getTokenByUser(user: User): string {
    const signInformation: SignInformation = {
      id: user.id.id,
      name: user.name,
      email: user.email,
    };

    return jwt.sign(signInformation, this.configService.getJwtSecret(), {
      expiresIn: '1d',
      audience: 'issue-hunter',
      issuer: 'issue-hunter',
    });
  }

  getSignInformationByToken(token: string): SignInformation {
    return jwt.verify(token, this.configService.getJwtSecret(), {
      audience: 'issue-hunter',
      issuer: 'issue-hunter',
    }) as SignInformation;
  }

}
