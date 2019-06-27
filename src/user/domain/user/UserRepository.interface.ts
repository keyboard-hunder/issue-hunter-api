import { UserId } from './UserId';
import { User } from './User';

export const USER_REPOSITORY_TOKEN = 'USER_REPOSITORY_TOKEN';

export interface IUserRepository {
  findById(userId: UserId): Promise<User|null>;
  save(user: User): Promise<void>;
  remove(user: User): Promise<void>;
}
