import { Repository } from '@modusign/ddd';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository as OrmRepository } from 'typeorm';

import { User } from '../../../domain/user/User';
import { UserId } from '../../../domain/user/UserId';
import { IUserRepository } from '../../../domain/user/UserRepository.interface';
import { UserMapper } from './User.mapper';
import { UserEntity } from './User.entity';

@Injectable()
export class UserRepository implements IUserRepository {

  constructor(
    private readonly mapper: UserMapper,
    @InjectRepository(UserEntity)
    private readonly ormRepository: OrmRepository<UserEntity>,
  ) {}

  async findById(userId: UserId): Promise<User|null> {
    const userEntity = await this.ormRepository.findOne(userId.id);
    if (userEntity === undefined) return null;

    return this.mapper.toDomain(userEntity);
  }

  async save(user: User): Promise<void> {
    const entity = this.mapper.toEntity(user);
    await this.ormRepository.save(entity);
  }

  async remove(user: User): Promise<void> {
    const entity = this.mapper.toEntity(user);
    await this.ormRepository.remove(entity);
  }

}
