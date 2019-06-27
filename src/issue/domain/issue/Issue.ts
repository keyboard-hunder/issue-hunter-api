import { Entity } from '@modusign/ddd';

import { IssueId } from './IssueId';
import { GithubInformation } from './GithubInformation';
import { KlaytnInformation } from './KlaytnInformation';

export class Issue extends Entity<Issue, IssueId> {

  private _state: string;
  private _category: string;
  private _githubInformation: GithubInformation;
  private _klaytnInformation: KlaytnInformation;
  private _createdAt: Date;
  private _updatedAt: Date;
  private _userId: number;

  constructor(
    id: IssueId,
    state: string,
    category: string,
    githubInformation: GithubInformation,
    klaytnInformation: KlaytnInformation,
    createdAt: Date,
    updatedAt: Date,
    userId: number,
  ) {
    super(id);
    this._state = state;
    this._category = category;
    this._githubInformation = githubInformation;
    this._klaytnInformation = klaytnInformation;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
    this._userId = userId;
  }

  get state() {
    return this._state;
  }

  get category() {
    return this._category;
  }

  get githubInformation() {
    return this._githubInformation;
  }

  get klaytnInformation() {
    return this._klaytnInformation;
  }

  get userId() {
    return this.userId;
  }

  public changeState(state: string): void {
    this._state = state;
  }

}
