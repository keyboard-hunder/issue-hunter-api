import { ValueObject } from '@modusign/ddd';

export class KlaytnInformation extends ValueObject<KlaytnInformation> {

  private _id: number;
  private _price: number;

  constructor(id: number, price: number) {
    super();
    this._id = id;
    this._price = price;
  }

  get id() {
    return this._id;
  }

  get price() {
    return this._price;
  }

}
