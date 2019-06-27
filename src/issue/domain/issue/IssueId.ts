import { Identity } from '@modusign/ddd';

export class IssueId extends Identity<IssueId> {

  private _id: number;

  constructor(id: number) {
    super();
    this._id = id;
  }

  get id() {
    return this._id;
  }

}
