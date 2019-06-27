import { ValueObject } from '@modusign/ddd';

export class GithubInformation extends ValueObject<GithubInformation> {

  private _id: number;
  private _issueNumber: number;
  private _repositoryUrl: string;
  private _title: string;
  private _body: string;

  constructor(
    id: number,
    issueNumber: number,
    repositoryUrl: string,
    title: string,
    body: string,
  ) {
    super();
    this._id = id;
    this._issueNumber = issueNumber;
    this._repositoryUrl = repositoryUrl;
    this._title = title;
    this._body = body;
  }

  get id() {
    return this._id;
  }

  get issueNumber() {
    return this._issueNumber;
  }

  get repositoryUrl() {
    return this._repositoryUrl;
  }

  get title() {
    return this._title;
  }

  get body() {
    return this._body;
  }

}
