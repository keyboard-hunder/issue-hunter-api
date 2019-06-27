import axios from 'axios';
import { Injectable } from '@nestjs/common';

import { IGithubIssueRepository } from '../../domain/GithubIssueRepository.interface';
import { GithubIssue } from '../../domain/GithubIssue';

@Injectable()
export class GithubIssueRepository implements IGithubIssueRepository {

  async findByIssueNumber(repositoryFullName: string, issueNumber: number) {
    const { data: { id, number, repository_url, state, title, body } } = await axios({
      method: 'get',
      url: `https://api.github.com/repos/${repositoryFullName}/issues/${issueNumber}`,
    });

    return new GithubIssue(
      id,
      number,
      repository_url,
      state,
      title,
      body,
    );
  }

  async findByRepository(repositoryFullName: string): Promise<GithubIssue[]> {
    const { data: issues } = await axios({
      method: 'get',
      url: `https://api.github.com/repos/${repositoryFullName}/issues?state=open`,
    });

    return issues.map(issue => new GithubIssue(
      issue.id,
      issue.number,
      issue.repository_url,
      issue.state,
      issue.title,
      issue.body,
    )) as GithubIssue[];
  }

}
