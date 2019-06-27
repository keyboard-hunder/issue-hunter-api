import { Controller, Get, UseGuards, Req, Inject, Query } from '@nestjs/common';

import { GithubRepositoryService } from '../application/GithubRepository.service';
import { GetIssuesQuery } from './quey/GetIssuesQuery';
import { GithubIssueService } from '../application/GithubIssue.service';

@Controller('/github')
export class GithubController {

  constructor(
    private readonly githubRepositoryService: GithubRepositoryService,
    private readonly githubIssueService: GithubIssueService,
  ) {}

  @Get('/repositories')
  async getRepositories(
    @Req() request,
  ) {
    const repositories = await this.githubRepositoryService.getRepositories(
      '07bfe49916f5f5f8a7288d2e9802ce5c298db864',
    );
    return { message: 'repositories received', result: { repositories } };
  }

  @Get('/issues')
  async getIssues(
    @Query() getIssuesQuery: GetIssuesQuery,
  ) {
    const { repositoryFullName } = getIssuesQuery;
    const issues = await this.githubIssueService.getIssuesByRepository(repositoryFullName);
    return { message: 'issues received', result: { issues } };
  }

}
