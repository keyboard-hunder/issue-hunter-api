import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { AuthController } from './interface/Auth.controller';
import { GithubModule } from '../github/Github.module';
import { OauthService } from './application/oauth/Oauth.service';
import { JwtService } from './application/oauth/Jwt.service';
import { UserModule } from '../user/User.module';
import { AuthService } from './application/oauth/Auth.service';
import { HttpStrategy } from './application/strategy/Http.strategy';

@Module({
  imports: [
    PassportModule.register({}),
    GithubModule,
    UserModule,
  ],
  providers: [OauthService, JwtService, AuthService, HttpStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
