import { Controller, Get, UseGuards, Req, Post, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { IssueService } from '../application/Issue.service';
import { CreateIssueDTO } from './dto/CreateIssueDTO';
import { HookService } from '../application/Hook.service';
import { HandlePullRequestHookDTO } from './dto/HandlePullRequestHookDTO';

@Controller('/issues')
export class IssueController {

  constructor(
    private readonly issueService: IssueService,
    private readonly hookService: HookService,
  ) {}

  @Post('/')
  @UseGuards(AuthGuard('bearer'))
  async createIssue(
    @Req() request,
    @Body() createIssueDTO: CreateIssueDTO,
  ) {
    const { repositoryFullName, klaytnPrice, category, issueNumber } = createIssueDTO;
    await this.issueService.createIssue(
      request.user.id.id,
      repositoryFullName,
      issueNumber,
      klaytnPrice,
      category,
      request.user.avatarUrl,
      request.user.accessToken,
    );
    return { message: 'issue created' };
  }

  @Post('/github/hook/pr')
  async handlePullRequestHook(
    @Body() handlePullRequestHookDTO: HandlePullRequestHookDTO,
  ) {
    const pullRequest = handlePullRequestHookDTO['pull_request'];
    const { state, merged, body, repo, user } = pullRequest;
    const repoFullName = repo['full_name'];
    const solvingGithubId = user.id;

    await this.hookService.handlePullRequestHook(
      state,
      merged,
      body,
      repoFullName,
      solvingGithubId,
    );
    return { message: 'pull request hook handled' };
  }

}
