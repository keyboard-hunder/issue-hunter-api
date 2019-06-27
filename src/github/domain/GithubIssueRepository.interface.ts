import { GithubIssue } from './GithubIssue';

export const GITHUB_ISSUE_REPOSITORY_TOKEN = 'GITHUB_ISSUE_REPOSITORY_TOKEN';
export interface IGithubIssueRepository {
  findByRepository(repositoryFullName: string, page: number): Promise<GithubIssue[]>;
  findByIssueNumber(repositoryFullName: string, issueNumber: number): Promise<GithubIssue>;
  closeIssue(
    repositoryFullName: string,
    issueNumber: number,
    accessToken: string,
  ): Promise<void>;
  addComment(
    repositoryFullName: string,
    issueNumber: number,
    comment: string,
    accessToken: string,
  ): Promise<void>;
}
