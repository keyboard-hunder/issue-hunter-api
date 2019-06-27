import { ValueObject } from '@modusign/ddd';

export class GithubRepository extends ValueObject<GithubRepository> {

  private _id: number;
  private _name: string;
  private _fullName: string;

  constructor(
    id: number,
    name: string,
    fullName: string,
  ) {
    super();
    this._id = id;
    this._name = name;
    this._fullName = fullName;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get fullName() {
    return this._fullName;
  }

}
