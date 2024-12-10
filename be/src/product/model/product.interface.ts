import { Document } from 'mongoose';

export interface Product extends Document {
  readonly name: string;
  readonly price: number;
  readonly quantity: number;
  readonly describe: string;
  img: string;
}
