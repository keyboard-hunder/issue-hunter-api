import { GitHubUser } from './GithubUser';

export const GIT_HUB_USER_REPOSITORY_TOKEN = 'IGitHubUserRepositoryToken';
export interface IGitHubUserRepositoty {
  findByCode(code: string): Promise<GitHubUser>;
}
