import { Injectable, Inject } from '@nestjs/common';

import {
  IUserRepository,
  USER_REPOSITORY_TOKEN,
} from '../../../user/domain/user/UserRepository.interface';
import { JwtService } from './Jwt.service';
import { UserId } from '../../../user/domain/user/UserId';
import { User } from '../../../user/domain/user/User';

@Injectable()
export class AuthService {
  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    private readonly userRepository: IUserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(token: string): Promise<User|null> {
    const signInformation = this.jwtService.getSignInformationByToken(token);
    return await this.userRepository.findById(new UserId(signInformation.id));
  }

}
