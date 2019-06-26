import { Module, Global } from '@nestjs/common';

import { ConfigService } from './application/Config.service';
import { ProcessEnv } from './infrastructure/ProcessEnv';

@Global()
@Module({
  providers: [ConfigService, ProcessEnv],
  exports: [ConfigService],
})
export class ConfigModule {}
