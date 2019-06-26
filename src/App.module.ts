import { Module } from '@nestjs/common';

import { ConfigModule } from './config/Config.module';

@Module({
  imports: [ConfigModule],
})

export class AppModule {}
