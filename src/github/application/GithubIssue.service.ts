import { Injectable, Inject } from '@nestjs/common';

import {
  GITHUB_ISSUE_REPOSITORY_TOKEN,
  IGithubIssueRepository,
} from '../domain/GithubIssueRepository.interface';

@Injectable()
export class GithubIssueService {

  constructor(
    @Inject(GITHUB_ISSUE_REPOSITORY_TOKEN)
    private readonly githubIssueRepository: IGithubIssueRepository,
  ) {}

  async getIssuesByRepository(repositoryFullName: string, page: number): Promise<object[]> {
    const issues = await this.githubIssueRepository.findByRepository(repositoryFullName, page);
    return issues.map(issue => ({
      id: issue.id,
      num: issue.num,
      repositoryUrl: issue.repositoryUrl,
      state: issue.state,
      title: issue.title,
      body: issue.body,
    }));
  }

}
