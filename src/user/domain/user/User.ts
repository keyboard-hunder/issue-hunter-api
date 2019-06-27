import { Entity } from '@modusign/ddd';

import { UserId } from './UserId';

export class User extends Entity<User, UserId> {

  private _name: string;
  private _email: string;
  private _avatarUrl: string;

  constructor(
    userId: UserId,
    name: string,
    email: string,
    avatarUrl: string,
  ) {
    super(userId);
    this._name = name;
    this._email = email;
    this._avatarUrl = avatarUrl;
  }

  get name() {
    return this._name;
  }

  get email() {
    return this._email;
  }

  get avatarUrl() {
    return this._avatarUrl;
  }

}
