import { Controller, Get, Query } from '@nestjs/common';

import { OauthGithubQuery } from './query/OauthGithubQuery';
import { OauthService } from '../application/oauth/Oauth.service';

@Controller('/login')
export class AuthController {

  constructor(
    private readonly oauthService: OauthService,
  ) {}

  @Get('/oauth/github')
  async oauthGithub(
    @Query() query: OauthGithubQuery,
  ) {
    const { code } = query;
    const jwtToken = await this.oauthService.oauthGithub(code);
    return { message: 'github oauth login successed', result: { token: jwtToken } };
  }

}
