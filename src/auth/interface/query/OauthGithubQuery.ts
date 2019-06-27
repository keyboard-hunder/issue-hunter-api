import { IsNotEmpty, IsString } from 'class-validator';

export class OauthGithubQuery {

  @IsString()
  @IsNotEmpty()
  code: string;

}
