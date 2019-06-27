import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfigModule } from './config/Config.module';
import { AuthModule } from './auth/Auth.module';
import { ConfigService } from './config/application/Config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => configService.getTypeormConfig(),
    }),
    ConfigModule,
    AuthModule,
  ],
})

export class AppModule {}
