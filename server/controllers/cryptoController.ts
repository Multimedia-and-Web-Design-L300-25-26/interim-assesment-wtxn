import { Request, Response } from "express";
import Crypto from "../models/Crypto";

export const getAllCryptos = async (req: Request, res: Response) => {
  try {
    const cryptos = await Crypto.find().sort({ name: 1 });
    res.json(cryptos);
  } catch (error) {
    res.status(500).json({ message: "Server error fetching cryptos", error });
  }
};

export const getTopGainers = async (req: Request, res: Response) => {
  try {
    const cryptos = await Crypto.find().sort({ change24h: -1 });
    res.json(cryptos);
  } catch (error) {
    res.status(500).json({ message: "Server error fetching gainers", error });
  }
};

export const getNewListings = async (req: Request, res: Response) => {
  try {
    const cryptos = await Crypto.find().sort({ createdAt: -1 });
    res.json(cryptos);
  } catch (error) {
    res.status(500).json({ message: "Server error fetching new listings", error });
  }
};

export const addCrypto = async (req: Request, res: Response) => {
  try {
    const { name, symbol, price, image, change24h } = req.body;
    
    if (!name || !symbol || price === undefined || !image || change24h === undefined) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newCrypto = new Crypto({
      name,
      symbol,
      price,
      image,
      change24h,
    });

    await newCrypto.save();
    res.status(201).json(newCrypto);
  } catch (error) {
    res.status(500).json({ message: "Server error creating crypto", error });
  }
};
