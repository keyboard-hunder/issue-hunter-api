import { Injectable } from '@nestjs/common';

import { ProcessEnv } from '../infrastructure/ProcessEnv';

@Injectable()
export class ConfigService {

  constructor(
    private readonly processEnv: ProcessEnv,
  ) {}

  public getGitHubClientConfig(): { id: string, secret: string } {
    return {
      id: this.processEnv.getString('GITHUB_CLIENT_ID'),
      secret: this.processEnv.getString('GITHUB_CLIENT_SECRET'),
    };
  }

}
