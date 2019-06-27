import { Entity } from '@modusign/ddd';

import { UserId } from './UserId';

export class User extends Entity<User, UserId> {

  private _name: string;
  private _email: string;
  private _avatarUrl: string;
  private _accessToken: string;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor(
    userId: UserId,
    name: string,
    email: string,
    avatarUrl: string,
    accessToken: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
    super(userId);
    this._name = name;
    this._email = email;
    this._avatarUrl = avatarUrl;
    this._accessToken = accessToken;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
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

  get accessToken() {
    return this._accessToken;
  }

}
