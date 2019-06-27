import { GithubHook } from './GithubHook';

export const GITHUB_HOOK_REPOSITORY_TOKEN = 'GITHUB_HOOK_REPOSITORY_TOKEN';

export interface IGithubHookRepository {
  save(githubHook: GithubHook): Promise<void>;
}
