import { Module } from '@nestjs/common';

import { GIT_HUB_USER_REPOSITORY_TOKEN } from './domain/GithubUserRepository.interface';
import { GitHubUserRepository } from './infrastructure/api/GithubUserRepository';
import { GITHUB_REPOSITORY_REPOSITORY_TOKEN } from './domain/GithubRepositoryRepository.interface';
import { GithubRepositoryRepository } from './infrastructure/api/RepositoryRepository';
import { GithubController } from './interface/Github.controller';
import { GithubRepositoryService } from './application/GithubRepository.service';
import { GITHUB_ISSUE_REPOSITORY_TOKEN } from './domain/GithubIssueRepository.interface';
import { GithubIssueRepository } from './infrastructure/api/GithubIssueRepository';
import { GithubIssueService } from './application/GithubIssue.service';
import { GithubHelperService } from './application/GithubHelper.service';
import { GITHUB_HOOK_REPOSITORY_TOKEN } from './domain/GithubHookRepository.interface';
import { GithubHookRepository } from './infrastructure/api/GithubHookRepository';

@Module({
  imports: [],
  providers: [{
    provide: GIT_HUB_USER_REPOSITORY_TOKEN,
    useClass: GitHubUserRepository,
  }, {
    provide: GITHUB_REPOSITORY_REPOSITORY_TOKEN,
    useClass: GithubRepositoryRepository,
  }, {
    provide: GITHUB_ISSUE_REPOSITORY_TOKEN,
    useClass: GithubIssueRepository,
  }, {
    provide: GITHUB_HOOK_REPOSITORY_TOKEN,
    useClass: GithubHookRepository,
  },
    GithubRepositoryService,
    GithubIssueService,
    GithubHelperService,
  ],
  controllers: [GithubController],
  exports: [
    GIT_HUB_USER_REPOSITORY_TOKEN,
    GITHUB_ISSUE_REPOSITORY_TOKEN,
    GITHUB_HOOK_REPOSITORY_TOKEN,
    GithubHelperService,
  ],
})
export class GithubModule {}
