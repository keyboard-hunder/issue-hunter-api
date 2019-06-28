import { Injectable, Inject } from '@nestjs/common';
import { IUserRepository, USER_REPOSITORY_TOKEN } from '../domain/user/UserRepository.interface';
import { UserId } from '../domain/user/UserId';

@Injectable()
export class UserService {

  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    private readonly userRepository: IUserRepository,
  ) {}

  async getUserById(userId: UserId): Promise<object> {
    const user = await this.userRepository.findById(userId);

    return {
      id: user.id.id,
      name: user.name,
      email: user.email,
      avatarUrl: user.avatarUrl,
    };
  }

}
