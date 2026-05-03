import mongoose, { Schema, Document } from "mongoose";

export interface ICrypto extends Document {
  name: string;
  symbol: string;
  price: number;
  image: string;
  change24h: number; // percentage change, e.g. +2.5
  createdAt: Date;
}

const CryptoSchema: Schema = new Schema({
  name: { type: String, required: true },
  symbol: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  change24h: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<ICrypto>("Crypto", CryptoSchema);
