import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { IssueFactory } from './domain/issue/Issue.factory';
import { IssueEntity } from './infrastructure/persistance/issue/Issue.entity';
import { IssueMapper } from './infrastructure/persistance/issue/Issue.mapper';
import { ISSUE_REPOSITORY_TOKEN } from './domain/issue/IssueRepository.interface';
import { IssueRepository } from './infrastructure/persistance/issue/Issue.repository';

@Module({
  imports: [TypeOrmModule.forFeature([IssueEntity])],
  providers: [IssueFactory, IssueMapper, {
    provide: ISSUE_REPOSITORY_TOKEN,
    useClass: IssueRepository,
  }],
  controllers: [],
  exports: [],
})
export class IssueModule {}
