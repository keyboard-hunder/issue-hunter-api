import axios from 'axios';
import { Injectable } from '@nestjs/common';

import { IGithubHookRepository } from '../../domain/GithubHookRepository.interface';
import { GithubHook } from '../../domain/GithubHook';

@Injectable()
export class GithubHookRepository implements IGithubHookRepository {

  async save(githubHook: GithubHook): Promise<void> {
    await axios({
      method: 'post',
      url: `https://api.github.com/repos/${githubHook.repositoryFullName}/hooks`,
      data: {
        name: 'web',
        active: true,
        events: githubHook.events,
        config: {
          url: githubHook.url,
          content_type: 'json',
          insecure_ssl: '1',
        },
      },
    });
  }

}
