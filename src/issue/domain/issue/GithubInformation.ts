import { ValueObject } from '@modusign/ddd';

export class GithubInformation extends ValueObject<GithubInformation> {

  private _id: number;
  private _issueNumber: number;
  private _repositoryFullName: string;
  private _title: string;
  private _body: string;

  constructor(
    id: number,
    issueNumber: number,
    repositoryFullName: string,
    title: string,
    body: string,
  ) {
    super();
    this._id = id;
    this._issueNumber = issueNumber;
    this._repositoryFullName = repositoryFullName;
    this._title = title;
    this._body = body;
  }

  get id() {
    return this._id;
  }

  get issueNumber() {
    return this._issueNumber;
  }

  get repositoryFullName() {
    return this._repositoryFullName;
  }

  get title() {
    return this._title;
  }

  get body() {
    return this._body;
  }

}
