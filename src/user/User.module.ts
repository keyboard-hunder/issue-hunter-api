import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserFactory } from './domain/user/User.factory';
import { UserMapper } from './infrastructure/persistance/user/User.mapper';
import { USER_REPOSITORY_TOKEN } from './domain/user/UserRepository.interface';
import { UserRepository } from './infrastructure/persistance/user/User.repository';
import { UserEntity } from './infrastructure/persistance/user/User.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserFactory, UserMapper, {
    provide: USER_REPOSITORY_TOKEN,
    useClass: UserRepository,
  }],
  controllers: [],
  exports: [UserFactory, USER_REPOSITORY_TOKEN],
})
export class UserModule {}
