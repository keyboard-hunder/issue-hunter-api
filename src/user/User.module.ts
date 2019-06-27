import { Module } from '@nestjs/common';
import { UserFactory } from './domain/user/User.factory';
import { UserMapper } from './infrastructure/persistance/user/User.mapper';
import { USER_REPOSITORY_TOKEN } from './domain/user/UserRepository.interface';
import { UserRepository } from './infrastructure/persistance/user/User.repository';

@Module({
  providers: [UserFactory, UserMapper, {
    provide: USER_REPOSITORY_TOKEN,
    useClass: UserRepository,
  }],
  controllers: [],
  exports: [UserFactory, USER_REPOSITORY_TOKEN],
})
export class UserModule {}
