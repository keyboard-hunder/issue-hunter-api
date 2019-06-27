import { Module } from '@nestjs/common';

import { AuthController } from './interface/Auth.controller';
import { GithubModule } from '../github/Github.module';
import { OauthService } from './application/oauth/Oauth.service';
import { JwtService } from './application/oauth/Jwt.service';
import { UserModule } from '../user/User.module';

@Module({
  imports: [GithubModule, UserModule],
  providers: [OauthService, JwtService],
  controllers: [AuthController],
})
export class AuthModule {}
