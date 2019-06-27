import { Injectable, Inject } from '@nestjs/common';
import { KLAYTN_TOKEN, IKlaytn } from './util/Klaytn.interface';
import { GithubHelperService } from '../../github/application/GithubHelper.service';
import {
  GITHUB_ISSUE_REPOSITORY_TOKEN,
  IGithubIssueRepository,
} from '../../github/domain/GithubIssueRepository.interface';
import { IssueFactory } from '../domain/issue/Issue.factory';
import { IssueId } from '../domain/issue/IssueId';
import { GithubInformation } from '../domain/issue/GithubInformation';
import { KlaytnInformation } from '../domain/issue/KlaytnInformation';
import {
  IIssueRepository,
  ISSUE_REPOSITORY_TOKEN,
} from '../domain/issue/IssueRepository.interface';

@Injectable()
export class IssueService {

  constructor(
    @Inject(KLAYTN_TOKEN)
    private readonly klaytn: IKlaytn,
    @Inject(GITHUB_ISSUE_REPOSITORY_TOKEN)
    private readonly githubIssueRepository: IGithubIssueRepository,
    @Inject(ISSUE_REPOSITORY_TOKEN)
    private readonly issueRepository: IIssueRepository,
    private readonly githubHelperService: GithubHelperService,
    private readonly issueFactory: IssueFactory,
  ) {}

  async createIssue(
    userId: number,
    repositoryFullName: string,
    issueNumber: number,
    klaytnPrice: number,
    category: string,
  ): Promise<void> {
    // get issue`s github information
    const repositoryUrl = this.githubHelperService.getRepositoryUrl(repositoryFullName);
    const githubIssue = await this.githubIssueRepository.findByIssueNumber(
      repositoryFullName,
      issueNumber,
    );

    // add issue to klaytn
    const newKlaytnId = await this.klaytn.makeIssue(
      userId,
      repositoryUrl,
      issueNumber,
      githubIssue.title,
      category,
      klaytnPrice,
    );

    // create issue
    const newIssue = this.issueFactory.create(
      new IssueId(githubIssue.id),
      category,
      new GithubInformation(
        githubIssue.id,
        issueNumber,
        repositoryFullName,
        githubIssue.title,
        githubIssue.body,
      ),
      new KlaytnInformation(
        newKlaytnId,
        klaytnPrice,
      ),
    );

    await this.issueRepository.save(newIssue);
  }

}
