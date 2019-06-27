import { GithubIssue } from './GithubIssue';

export const GITHUB_ISSUE_REPOSITORY_TOKEN = 'GITHUB_ISSUE_REPOSITORY_TOKEN';
export interface IGithubIssueRepository {
  findByRepository(repositoryFullName: string): Promise<GithubIssue[]>;
}
