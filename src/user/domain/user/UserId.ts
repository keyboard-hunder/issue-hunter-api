import { Identity } from '@modusign/ddd';

export class UserId extends Identity<UserId> {

  private _id: number;

  constructor(id: number) {
    super();
    this._id = id;
  }

  get id() {
    return this._id;
  }

}
