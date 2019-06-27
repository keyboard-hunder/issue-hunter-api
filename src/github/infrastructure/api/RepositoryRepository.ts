import axios from 'axios';
import { Injectable } from '@nestjs/common';

import { IRepositoryRepositoty } from '../../domain/GithubRepositoryRepository.interface';
import { GithubRepository } from '../../domain/GithubRepository';

@Injectable()
export class GithubRepositoryRepository implements IRepositoryRepositoty {

  async findByUser(token: string): Promise<GithubRepository[]> {
    const { data: repositories } = await axios({
      method: 'get',
      url: 'https://api.github.com/user/repos?visibility=public',
      headers: { Authorization: `token ${token}` },
    });

    return repositories.map(repository => new GithubRepository(
      repository.id,
      repository.name,
      repository.full_name,
    )) as GithubRepository[];
  }

}
