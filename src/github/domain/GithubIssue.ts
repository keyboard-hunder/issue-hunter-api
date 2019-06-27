import { ValueObject } from '@modusign/ddd';

export class GithubIssue extends ValueObject<GithubIssue> {

  private _id: number;
  private _num: number;
  private _repositoryUrl: string;
  private _state: string;
  private _title: string;
  private _body: string;

  constructor(
    id: number,
    num: number,
    repositoryUrl: string,
    state: string,
    title: string,
    body: string,
  ) {
    super();
    this._id = id;
    this._num = num;
    this._repositoryUrl = repositoryUrl;
    this._state = state;
    this._title = title;
    this._body = body;
  }

  get id() {
    return this._id;
  }

  get num() {
    return this._num;
  }

  get repositoryUrl() {
    return this._repositoryUrl;
  }

  get state() {
    return this._state;
  }

  get title() {
    return this._title;
  }

  get body() {
    return this._body;
  }

}
