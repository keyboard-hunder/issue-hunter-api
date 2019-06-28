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
    userId: number,
  ): Issue {
    return new Issue(
      id,
      'open',
      category,
      githubInformation,
      klaytnInformation,
      new Date(),
      new Date(),
      userId,
    );
  }

  public reconstitute(
    id: number,
    state: string,
    category: string,
    githubIssueNumber: number,
    githubRepositoryFullName: string,
    githubTitle: string,
    klaytnId: number,
    klaytnPrice: number,
    createdAt: Date,
    updatedAt: Date,
    userId: number,
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
      ),
      new KlaytnInformation(
        klaytnId,
        klaytnPrice,
      ),
      createdAt,
      updatedAt,
      userId,
    );
  }

}
