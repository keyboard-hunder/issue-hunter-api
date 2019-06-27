import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository as OrmRepository } from 'typeorm';

import { IIssueRepository, SearchParam } from '../../../domain/issue/IssueRepository.interface';
import { IssueMapper } from './Issue.mapper';
import { IssueEntity } from './Issue.entity';
import { IssueId } from '../../../domain/issue/IssueId';
import { Issue } from '../../../domain/issue/Issue';

@Injectable()
export class IssueRepository implements IIssueRepository {

  constructor(
    private readonly mapper: IssueMapper,
    @InjectRepository(IssueEntity)
    private readonly ormRepository: OrmRepository<IssueEntity>,
  ) {}

  async findById(issueId: IssueId): Promise<Issue|null> {
    const issueEntity = await this.ormRepository.findOne(issueId.id);
    if (issueEntity === undefined) return null;

    return this.mapper.toDomain(issueEntity);
  }

  async findByRepoFullNameAndIssueNumber(
    repoFullName: string,
    issueNumber: number,
  ): Promise<Issue|null> {
    const issueEntity = await this.ormRepository.findOne({
      githubIssueNumber: issueNumber,
      githubRepositoryFullName: repoFullName,
    });
    if (issueEntity === undefined) return null;

    return this.mapper.toDomain(issueEntity);
  }

  async findBySearchParam(param: SearchParam): Promise<Issue[]> {
    const { page } = param;
    const issueEntities = await this.ormRepository.find({
      skip: (page - 1) * 30,
      take: 30,
    });
    return issueEntities.map(issueEntity => this.mapper.toDomain(issueEntity));
  }

  async save(issue: Issue): Promise<void> {
    const entity = this.mapper.toEntity(issue);
    await this.ormRepository.save(entity);
  }

  async remove(issue: Issue): Promise<void> {
    const entity = this.mapper.toEntity(issue);
    await this.ormRepository.remove(entity);
  }

}
