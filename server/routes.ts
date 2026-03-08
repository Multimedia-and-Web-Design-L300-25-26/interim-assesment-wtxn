import type { Express } from "express";
import type { Server } from "http";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Simple health check endpoint for the frontend clone
  app.get(api.health.get.path, (req, res) => {
    res.json({ status: "ok" });
  });

  return httpServer;
}
