import { GithubRepository } from './GithubRepository';

export const GITHUB_REPOSITORY_REPOSITORY_TOKEN = 'GITHUB_REPOSITORY_REPOSITORY_TOKEN';
export interface IRepositoryRepositoty {
  findByUser(token: string): Promise<GithubRepository[]>;
}
