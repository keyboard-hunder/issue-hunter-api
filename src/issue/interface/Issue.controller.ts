import { Controller, Get, UseGuards, Req, Post, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { IssueService } from '../application/Issue.service';
import { CreateIssueDTO } from './dto/CreateIssueDTO';

@Controller('/issues')
export class IssueController {

  constructor(
    private readonly issueService: IssueService,
  ) {}

  @Post('/')
  @UseGuards(AuthGuard('bearer'))
  async createIssue(
    @Req() request,
    @Body() createIssueDTO: CreateIssueDTO,
  ) {
    const { repositoryFullName, klaytnPrice, category, issueNumber } = createIssueDTO;
    await this.issueService.createIssue(
      request.user.id,
      repositoryFullName,
      issueNumber,
      klaytnPrice,
      category,
    );
    return { message: 'issue created' };
  }
}
