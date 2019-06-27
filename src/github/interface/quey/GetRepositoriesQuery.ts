import { IsNumber } from 'class-validator';

export class GetRepositoriesQuery {

  @IsNumber()
  page: number;

}
