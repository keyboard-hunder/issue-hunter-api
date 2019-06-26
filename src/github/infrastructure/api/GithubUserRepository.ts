import axios from 'axios';
import { Injectable } from '@nestjs/common';

import { IGitHubUserRepositoty } from '../../domain/GithubUserRepository.interface';
import { GitHubUser } from '../../domain/GithubUser';
import { ConfigService } from '../../../config/application/Config.service';

@Injectable()
export class GitHubUserRepository implements IGitHubUserRepositoty {

  constructor(
    private readonly configService: ConfigService,
  ) {}

  async findByCode(code: string): Promise<GitHubUser> {
    const { id: clientID, secret: clientSecret } = this.configService.getGitHubClientConfig();

    // get access token
    const { data: { access_token } } = await axios({
      method: 'post',
      url: `https://github.com/login/oauth/access_token?client_id=${clientID}\
      &client_secret=${clientSecret}&code=${code}`,
      headers: { accept: 'application/json' },
    });

    const { data } = await axios({
      method: 'get',
      url: 'https://api.github.com/user',
      headers: { Authorization: `token ${access_token}` },
    });
    console.log(data);

    return new GitHubUser();
  }

}
