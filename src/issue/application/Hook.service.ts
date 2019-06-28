import { Injectable, Inject } from '@nestjs/common';

import { GithubHelperService } from '../../github/application/GithubHelper.service';
import {
  ISSUE_REPOSITORY_TOKEN,
  IIssueRepository,
} from '../domain/issue/IssueRepository.interface';
import { Klaytn } from '../infrastructure/klaytn/Klaytn';
import { KLAYTN_TOKEN } from './util/Klaytn.interface';
import {
  IGithubIssueRepository,
  GITHUB_ISSUE_REPOSITORY_TOKEN,
} from '../../github/domain/GithubIssueRepository.interface';
import {
  IUserRepository,
  USER_REPOSITORY_TOKEN,
} from '../../user/domain/user/UserRepository.interface';
import { UserId } from '../../user/domain/user/UserId';

@Injectable()
export class HookService {

  constructor(
    private readonly githubHelperService: GithubHelperService,
    @Inject(ISSUE_REPOSITORY_TOKEN)
    private readonly issueRepository: IIssueRepository,
    @Inject(GITHUB_ISSUE_REPOSITORY_TOKEN)
    private readonly githubIssueRepository: IGithubIssueRepository,
    @Inject(KLAYTN_TOKEN)
    private readonly klaytn: Klaytn,
    @Inject(USER_REPOSITORY_TOKEN)
    private readonly userRepositry: IUserRepository,
  ) {}

  async handlePullRequestHook(
    status: string,
    isMerged: boolean,
    prBody: string,
    repoFullName: string,
    solvingGithubId: number,
  ): Promise<void> {
    if (status !== 'closed' || !isMerged) {
      return;
    }

    const issueNumber = this.githubHelperService.getIssueNumber(prBody);
    const issue = await this.issueRepository.findByRepoFullNameAndIssueNumber(
      repoFullName,
      issueNumber,
    );

    if (issue === null) {
      return;
    }

    // solve klaytn issue
    await this.klaytn.solveIssue(solvingGithubId, issue.klaytnInformation.id);

    // change issue`s state
    issue.changeState('closed');
    await this.issueRepository.save(issue);

    // get access token of issuer
    // const user = await this.userRepositry.findById(new UserId(issue.userId));
    // const accessToken = user.accessToken;

    // comment to github issue
    // const comment = 'comment';
    // await this.githubIssueRepository.addComment(
    //   repoFullName,
    //   issueNumber,
    //   comment,
    //   accessToken,
    // );

    // closing github issue
    // await this.githubIssueRepository.closeIssue(
    //   repoFullName,
    //   issueNumber,
    //   accessToken,
    // );
  }

}
