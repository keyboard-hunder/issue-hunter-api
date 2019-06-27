import { Injectable } from '@nestjs/common';

import { User } from './User';
import { UserId } from './UserId';
import { GitHubUser } from '../../../github/domain/GithubUser';

@Injectable()
export class UserFactory {

  public create(
    userId: UserId,
    name: string,
    email: string,
    avatarUrl: string,
  ): User {
    return new User(
      userId,
      name,
      email,
      avatarUrl,
    );
  }

  public createByGitHubUser(githubUser: GitHubUser): User {
    const { id, email, name, avatarUrl } = githubUser;
    return new User(
      new UserId(id),
      name,
      email,
      avatarUrl,
    );
  }

  public reconstitute(
    userId: number,
    name: string,
    email: string,
    avatarUrl: string,
  ): User {
    return new User(
      new UserId(userId),
      name,
      email,
      avatarUrl,
    );
  }

}
