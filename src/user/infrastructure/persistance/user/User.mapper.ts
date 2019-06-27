import { Injectable } from '@nestjs/common';
import { classToPlain } from 'class-transformer';

import { User } from '../../../domain/user/User';
import { UserEntity } from './User.entity';
import { UserFactory } from '../../../domain/user/User.factory';

@Injectable()
export class UserMapper {

  constructor(private readonly userFactory: UserFactory) {}

  public toDomain(entity: UserEntity): User {
    return this.userFactory.reconstitute(
      entity.userId,
      entity.name,
      entity.email,
      entity.avatarUrl,
    );
  }

  public toEntity(domain: User): UserEntity {
    const plainUser: any = classToPlain(domain);
    const entity: UserEntity = new UserEntity();
    entity.userId = plainUser._id._id;
    entity.name = plainUser._name;
    entity.email = plainUser._email;
    entity.avatarUrl = plainUser._avatarUrl;

    return entity;
  }

}
