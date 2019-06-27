import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { IssueFactory } from './domain/issue/Issue.factory';
import { IssueEntity } from './infrastructure/persistance/issue/Issue.entity';
import { IssueMapper } from './infrastructure/persistance/issue/Issue.mapper';
import { ISSUE_REPOSITORY_TOKEN } from './domain/issue/IssueRepository.interface';
import { IssueRepository } from './infrastructure/persistance/issue/Issue.repository';
import { KLAYTN_TOKEN } from './application/util/Klaytn.interface';
import { Klaytn } from './infrastructure/klaytn/Klaytn';
import { GithubModule } from '../github/Github.module';
import { IssueService } from './application/Issue.service';
import { IssueController } from './interface/Issue.controller';

@Module({
  imports: [TypeOrmModule.forFeature([IssueEntity]), GithubModule],
  providers: [IssueFactory, IssueMapper, IssueService, {
    provide: ISSUE_REPOSITORY_TOKEN,
    useClass: IssueRepository,
  }, {
    provide: KLAYTN_TOKEN,
    useClass: Klaytn,
  }],
  controllers: [IssueController],
  exports: [],
})
export class IssueModule {}
