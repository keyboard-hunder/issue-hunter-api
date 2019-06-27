import { Injectable } from '@nestjs/common';

@Injectable()
export class GithubHelperService {

  public getRepositoryUrl(fullName: string): string {
    return `https://api.github.com/repos/${fullName}`;
  }

}
