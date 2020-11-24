import { Invoice } from './../types/invoice';

export interface InvoiceDTO {
  user: string;
   content: string;
   uploadTime: string;
   mSociete:string,
   mEmail:string,
   mNumero:string,
   mReleve:string,
   mMatricule:string,
   mAdress:string,
   cNom:string,
   cContact:string,
   cEmail:string,
   cNumero:string,
   cRib:string,
   cMatricule:string,
   cAdress:string,
   aNumero:string,
   aDate:string,
   ADateE:string,
   ADateL:string,
   ANote:string,
   Items:[{name:string,price:number,quantity:number}]
}