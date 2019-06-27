import { Injectable, Inject } from '@nestjs/common';

import {
  IRepositoryRepositoty,
  GITHUB_REPOSITORY_REPOSITORY_TOKEN,
} from '../domain/GithubRepositoryRepository.interface';

@Injectable()
export class GithubRepositoryService {

  constructor(
    @Inject(GITHUB_REPOSITORY_REPOSITORY_TOKEN)
    private readonly githubRepositoryRepository: IRepositoryRepositoty,
  ) {}

  async getRepositories(token: string): Promise<object[]> {
    const repositories = await this.githubRepositoryRepository.findByUser(token);
    return repositories.map(repository => ({
      id: repository.id,
      name: repository.name,
      fullName: repository.fullName,
    }));
  }

}
