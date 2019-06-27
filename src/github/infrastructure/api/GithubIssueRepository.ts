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

  async findByRepository(repositoryFullName: string, page: number): Promise<GithubIssue[]> {
    const { data: issues } = await axios({
      method: 'get',
      url: `https://api.github.com/repos/${repositoryFullName}/issues?state=open&page=${page}`,
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

  async closeIssue(
    repositoryFullName: string,
    issueNumber: number,
    accessToken: string,
  ): Promise<void> {
    await axios({
      method: 'patch',
      url: `https://api.github.com/repos/${repositoryFullName}/issues/${issueNumber}`,
      headers: { Authorization: `token ${accessToken}` },
      data: { state: 'closed' },
    });
  }

  async addComment(
    repositoryFullName: string,
    issueNumber: number,
    comment: string,
    accessToken: string,
  ): Promise<void> {
    await axios({
      method: 'post',
      url: `https://api.github.com/repos/${repositoryFullName}/issues/${issueNumber}/comments`,
      headers: { Authorization: `token ${accessToken}` },
      data: { body: comment },
    });
  }

}
