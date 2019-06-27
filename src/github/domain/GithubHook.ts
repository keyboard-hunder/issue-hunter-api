import { ValueObject } from '@modusign/ddd';

export class GithubHook extends ValueObject<GithubHook> {

  private _url: string;
  private _repositoryFullName: string;
  private _events: string[];

  constructor(
    url: string,
    repositoryFullName: string,
    events: string[],
  ) {
    super();
    this._url = url;
    this._repositoryFullName = repositoryFullName;
    this._events = events;
  }

  get url() {
    return this._url;
  }

  get repositoryFullName() {
    return this._repositoryFullName;
  }

  get events() {
    return this._events;
  }

}
