import { IsString, IsNotEmpty } from 'class-validator';

export class GetIssuesQuery {

  @IsString()
  @IsNotEmpty()
  repositoryFullName: string;

}
