import { Module } from '@nestjs/common';

import { GIT_HUB_USER_REPOSITORY_TOKEN } from './domain/GithubUserRepository.interface';
import { GitHubUserRepository } from './infrastructure/api/GithubUserRepository';
import { GITHUB_REPOSITORY_REPOSITORY_TOKEN } from './domain/GithubRepositoryRepository.interface';
import { GithubRepositoryRepository } from './infrastructure/api/RepositoryRepository';
import { GithubController } from './interface/Github.controller';
import { GithubRepositoryService } from './application/GithubRepository.service';

@Module({
  providers: [{
    provide: GIT_HUB_USER_REPOSITORY_TOKEN,
    useClass: GitHubUserRepository,
  }, {
    provide: GITHUB_REPOSITORY_REPOSITORY_TOKEN,
    useClass: GithubRepositoryRepository,
  }, GithubRepositoryService],
  controllers: [GithubController],
  exports: [GIT_HUB_USER_REPOSITORY_TOKEN],
})
export class GithubModule {}
