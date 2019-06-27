import { Controller, Get, UseGuards, Req, Inject } from '@nestjs/common';

import { GithubRepositoryService } from '../application/GithubRepository.service';

@Controller('/github')
export class GithubController {

  constructor(
    private readonly githubRepositoryService: GithubRepositoryService,
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

}
