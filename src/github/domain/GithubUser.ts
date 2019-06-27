import { ValueObject } from '@modusign/ddd';

export class GitHubUser extends ValueObject<GitHubUser> {

  private _id: number;
  private _name: string;
  private _email: string;
  private _avatarUrl: string;
  private _accessToken: string;

  constructor(
    id: number,
    name: string,
    email: string,
    avatarUrl: string,
    accessToken: string,
  ) {
    super();
    this._id = id;
    this._name = name;
    this._email = email;
    this._avatarUrl = avatarUrl;
    this._accessToken = accessToken;
  }

  get id() {
    return this._id;
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
