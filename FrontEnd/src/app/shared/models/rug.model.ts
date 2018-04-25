export class Rug {
  _id: string;
  name: string;
  price: string;
  serialNumber: string;
  imagePath: string;

  constructor(init?: Partial<Rug>) {
    Object.assign(this, init);
  }
}
