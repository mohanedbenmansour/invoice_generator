import { Document } from 'mongoose';

export interface Invoice extends Document {
  readonly user: string;
  readonly content: string;
  readonly uploadTime: string;
  readonly mSociete:string,
  readonly mEmail:string,
  readonly mNumero:string,
  readonly mReleve:string,
  readonly mMatricule:string,
  readonly mAdress:string,
  readonly cNom:string,
  readonly cContact:string,
  readonly cEmail:string,
  readonly cNumero:string,
  readonly cRib:string,
  readonly cMatricule:string,
  readonly cAdress:string,
  readonly aNumero:string,
  readonly aDate:string,
  readonly ADateE:string,
  readonly ADateL:string,
  readonly ANote:string,
  readonly Items:[{name:string,price:number,quantity:number}]
}