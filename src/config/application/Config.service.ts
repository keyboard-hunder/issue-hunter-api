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

  public getTypeormConfig(): object {
    return {
      type: 'mysql' as 'mysql',
      host: this.processEnv.getString('MYSQL_HOST'),
      port: this.processEnv.getNumber('MYSQL_PORT'),
      username: this.processEnv.getString('MYSQL_USER'),
      password: this.processEnv.getString('MYSQL_PASSWORD'),
      database: this.processEnv.getString('MYSQL_DATABASE'),
      entities: [`${this.processEnv.getString('PWD')}/**/*.entity{.ts,.js}`],
      synchronize: this.processEnv.getBoolean('ORM_SYNC'),
    };
  }

  public getJwtSecret(): string {
    return this.processEnv.getString('JWT_SECRET');
  }

}
