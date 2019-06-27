import { IssueId } from './IssueId';
import { Issue } from './Issue';

export const ISSUE_REPOSITORY_TOKEN = 'ISSUE_REPOSITORY_TOKEN';

export interface IIssueRepository {
  findById(issueId: IssueId): Promise<Issue|null>;
  findByRepoFullNameAndIssueNumber(repoFullName: string, issueNumber: number): Promise<Issue|null>;
  save(issue: Issue): Promise<void>;
  remove(issue: Issue): Promise<void>;
}
