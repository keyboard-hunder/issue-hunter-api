import { Module } from '@nestjs/common';

import { GIT_HUB_USER_REPOSITORY_TOKEN } from './domain/GithubUserRepository.interface';
import { GitHubUserRepository } from './infrastructure/api/GithubUserRepository';

@Module({
  providers: [{
    provide: GIT_HUB_USER_REPOSITORY_TOKEN,
    useClass: GitHubUserRepository,
  }],
  exports: [GIT_HUB_USER_REPOSITORY_TOKEN],
})
export class ConfigModule {}
