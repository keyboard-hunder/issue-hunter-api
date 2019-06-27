import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfigModule } from './config/Config.module';
import { AuthModule } from './auth/Auth.module';
import { ConfigService } from './config/application/Config.service';
import { GithubModule } from './github/Github.module';
import { IssueModule } from './issue/Issue.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => configService.getTypeormConfig(),
    }),
    ConfigModule,
    AuthModule,
    GithubModule,
    IssueModule,
  ],
})

export class AppModule {}
