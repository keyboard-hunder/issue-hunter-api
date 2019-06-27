import { Controller, Body, Post } from '@nestjs/common';

import { OauthService } from '../application/oauth/Oauth.service';
import { OauthGithubBody } from './body/OauthGithubBody';

@Controller('/login')
export class AuthController {

  constructor(
    private readonly oauthService: OauthService,
  ) {}

  @Post('/oauth/github')
  async oauthGithub(
    @Body() body: OauthGithubBody,
  ) {
    const { code } = body;
    const jwtToken = await this.oauthService.oauthGithub(code);
    return { message: 'github oauth login successed', result: { token: jwtToken } };
  }

}
