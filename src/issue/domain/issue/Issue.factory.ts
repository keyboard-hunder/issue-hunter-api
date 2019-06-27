import { Injectable } from '@nestjs/common';

import { Issue } from './Issue';
import { IssueId } from './IssueId';
import { GithubInformation } from './GithubInformation';
import { KlaytnInformation } from './KlaytnInformation';

@Injectable()
export class IssueFactory {

  public create(
    id: IssueId,
    category: string,
    githubInformation: GithubInformation,
    klaytnInformation: KlaytnInformation,
  ): Issue {
    return new Issue(
      id,
      'open',
      category,
      githubInformation,
      klaytnInformation,
      new Date(),
      new Date(),
    );
  }

  public reconstitute(
    id: number,
    state: string,
    category: string,
    githubIssueNumber: number,
    githubRepositoryFullName: string,
    githubTitle: string,
    githubBody: string,
    klaytnId: number,
    klaytnPrice: number,
    createdAt: Date,
    updatedAt: Date,
  ): Issue {
    return new Issue(
      new IssueId(id),
      state,
      category,
      new GithubInformation(
        id,
        githubIssueNumber,
        githubRepositoryFullName,
        githubTitle,
        githubBody,
      ),
      new KlaytnInformation(
        klaytnId,
        klaytnPrice,
      ),
      createdAt,
      updatedAt,
    );
  }

}
