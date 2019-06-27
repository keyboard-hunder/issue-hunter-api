import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class GetRepositoriesQuery {

  @IsString()
  @IsNotEmpty()
  page: string;

}
