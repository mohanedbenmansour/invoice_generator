import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
export const InvoiceSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
 
  mSociete:String,
  mEmail:String,
  mNumero:String,
  mReleve:String,
  mMatricule:String,
  mAdress:String,

  cNom:String,
  cContact:String,
  cEmail:String,
  cNumero:String,
  cRib:String,
  cMatricule:String,
  cAdress:String,
  
  aNumero:String,
  aDate:String,
  ADateE:String,
  ADateL:String,
  ANote:String,
  Items:[{name:String,price:Number,quantity:Number}]

 
});