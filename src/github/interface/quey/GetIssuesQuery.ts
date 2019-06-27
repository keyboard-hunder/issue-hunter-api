import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class GetIssuesQuery {

  @IsString()
  @IsNotEmpty()
  repositoryFullName: string;

  @IsNumber()
  page: number;

}
