import { Injectable } from '@nestjs/common';

@Injectable()
export class IssueService {

  async createIssue(
    repositoryId: number,
    issueId: number,
    klaytnPrice: number,
    category: string,
  ): Promise<void> {

  }

}
