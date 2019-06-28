import { Injectable } from '@nestjs/common';
import { classToPlain } from 'class-transformer';

import { IssueFactory } from '../../../domain/issue/Issue.factory';
import { IssueEntity } from './Issue.entity';
import { Issue } from '../../../domain/issue/Issue';

@Injectable()
export class IssueMapper {

  constructor(private readonly issueFactory: IssueFactory) {}

  public toDomain(entity: IssueEntity): Issue {
    return this.issueFactory.reconstitute(
      entity.id,
      entity.state,
      entity.category,
      entity.githubIssueNumber,
      entity.githubRepositoryFullName,
      entity.githubTitle,
      entity.klaytnId,
      entity.klaytnPrice,
      entity.createdAt,
      entity.updatedAt,
      entity.userId,
    );
  }

  public toEntity(domain: Issue): IssueEntity {
    const plainIssue: any = classToPlain(domain);
    const entity: IssueEntity = new IssueEntity();
    entity.id = plainIssue._id._id;
    entity.state = plainIssue._state;
    entity.category = plainIssue._category;
    entity.githubIssueNumber = plainIssue._githubInformation._issueNumber;
    entity.githubRepositoryFullName = plainIssue._githubInformation._repositoryFullName;
    entity.githubTitle = plainIssue._githubInformation._title;
    entity.klaytnId = plainIssue._klaytnInformation._id;
    entity.klaytnPrice = plainIssue._klaytnInformation._price;
    entity.createdAt = plainIssue._createdAt;
    entity.updatedAt = plainIssue._updatedAt;
    entity.userId = plainIssue._userId;
    return entity;
  }

}
