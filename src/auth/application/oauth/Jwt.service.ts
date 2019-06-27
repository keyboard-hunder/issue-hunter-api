import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

import { User } from '../../../user/domain/user/User';
import { ConfigService } from '../../../config/application/Config.service';

@Injectable()
export class JwtService {

  constructor(
    private readonly configService: ConfigService,
  ) {}

  getTokenByUser(user: User): string {
    const signInformation = {
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

}
