import { Injectable, Inject } from '@nestjs/common';

import {
  GIT_HUB_USER_REPOSITORY_TOKEN,
} from '../../../github/domain/GithubUserRepository.interface';
import { GitHubUserRepository } from '../../../github/infrastructure/api/GithubUserRepository';
import { GitHubUser } from '../../../github/domain/GithubUser';
import {
  USER_REPOSITORY_TOKEN,
  IUserRepository,
} from '../../../user/domain/user/UserRepository.interface';
import { UserId } from '../../../user/domain/user/UserId';
import { JwtService } from './Jwt.service';
import { UserFactory } from '../../../user/domain/user/User.factory';

@Injectable()
export class OauthService {

  constructor(
    @Inject(GIT_HUB_USER_REPOSITORY_TOKEN)
    private readonly gitHubUserRepository: GitHubUserRepository,
    @Inject(USER_REPOSITORY_TOKEN)
    private readonly userRepository: IUserRepository,
    private readonly userFactory: UserFactory,
    private readonly jwtService: JwtService,
  ) {}

  async oauthGithub(code: string): Promise<string> {
    const gitHubUser: GitHubUser = await this.gitHubUserRepository.findByCode(code);
    const user = await this.userRepository.findById(new UserId(gitHubUser.id));

    if (user === null) {
      // signup
      const newUser = this.userFactory.createByGitHubUser(gitHubUser);
      await this.userRepository.save(newUser);
      return this.jwtService.getTokenByUser(newUser);
    }

    return this.jwtService.getTokenByUser(user);
  }

}
