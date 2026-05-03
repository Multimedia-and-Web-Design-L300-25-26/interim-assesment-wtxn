import type { Express } from "express";
import { createServer, type Server } from "http";
import { register, login, getProfile, logout, getPortfolioChart } from "./controllers/authController";
import { getAllCryptos, getTopGainers, getNewListings, addCrypto } from "./controllers/cryptoController";
import { requireAuth } from "./middleware/auth";

export async function registerRoutes(httpServer: Server, app: Express): Promise<Server> {
  // Auth API
  app.post("/api/register", register);
  app.post("/api/login", login);
  app.post("/api/logout", logout);
  app.get("/api/profile", requireAuth, getProfile);
  app.get("/api/portfolio/chart", requireAuth, getPortfolioChart);

  // Crypto API
  app.get("/api/crypto", getAllCryptos);
  app.get("/api/crypto/gainers", getTopGainers);
  app.get("/api/crypto/new", getNewListings);
  app.post("/api/crypto", addCrypto);

  return httpServer;
}
