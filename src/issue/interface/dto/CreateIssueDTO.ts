import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateIssueDTO {

  @IsString()
  @IsNotEmpty()
  repositoryFullName: string;

  @IsNumber()
  issueNumber: number;

  @IsNumber()
  klaytnPrice: number;

  @IsString()
  @IsNotEmpty()
  category: string;

}
