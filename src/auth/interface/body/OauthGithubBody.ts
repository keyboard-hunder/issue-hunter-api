import { IsNotEmpty, IsString } from 'class-validator';

export class OauthGithubBody {

  @IsString()
  @IsNotEmpty()
  code: string;

}
