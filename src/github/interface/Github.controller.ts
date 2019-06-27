import { Controller, Get, UseGuards, Req, Inject, Query } from '@nestjs/common';

import { GithubRepositoryService } from '../application/GithubRepository.service';
import { GetIssuesQuery } from './quey/GetIssuesQuery';
import { GithubIssueService } from '../application/GithubIssue.service';
import { GetRepositoriesQuery } from './quey/GetRepositoriesQuery';

@Controller('/github')
export class GithubController {

  constructor(
    private readonly githubRepositoryService: GithubRepositoryService,
    private readonly githubIssueService: GithubIssueService,
  ) {}

  @Get('/repositories')
  async getRepositories(
    @Req() request,
    @Query() getRepositoriesQuery: GetRepositoriesQuery,
  ) {
    const { page } = getRepositoriesQuery;
    const repositories = await this.githubRepositoryService.getRepositories(
      '07bfe49916f5f5f8a7288d2e9802ce5c298db864',
      parseInt(page, 10),
    );
    return { message: 'repositories received', result: { repositories } };
  }

  @Get('/issues')
  async getIssues(
    @Query() getIssuesQuery: GetIssuesQuery,
  ) {
    const { repositoryFullName, page } = getIssuesQuery;
    const issues = await this.githubIssueService.getIssuesByRepository(
      repositoryFullName,
      parseInt(page, 10),
    );
    return { message: 'issues received', result: { issues } };
  }

}
