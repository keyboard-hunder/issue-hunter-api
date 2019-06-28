import { Injectable } from '@nestjs/common';

@Injectable()
export class GithubHelperService {

  public getRepositoryUrl(fullName: string): string {
    return `https://github.com/${fullName}`;
  }

  public getIssueNumber(prBody: string): number|null {
    const issueHunterPattern = /issue-hunter\s+#[1-9][0-9]* /i;
    const issueNumPattern = /#[1-9][0-9]*/;

    let found = prBody.match(issueHunterPattern);
    if (!found) {
      return null;
    }

    found = found[0].match(issueNumPattern);
    return parseInt(found[0][1], 10);
  }
}
