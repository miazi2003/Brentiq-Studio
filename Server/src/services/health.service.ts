import { env } from "../config/env";
import { prisma } from "../db/prisma";
import { DbHealthCheckData, HealthCheckData } from "../types/api.types";

export class HealthService {
  public static getSystemHealth(): HealthCheckData {
    return {
      uptime: Math.floor(process.uptime()),
      timestamp: new Date().toISOString(),
      environment: env.NODE_ENV,
      version: "1.0.0",
    };
  }

  public static async getDatabaseHealth(): Promise<DbHealthCheckData> {
    const startTime = Date.now();
    try {
      // Fast ping query to verify active connection
      await prisma.$queryRaw`SELECT 1`;
      const latencyMs = Date.now() - startTime;
      return {
        status: "connected",
        latencyMs,
      };
    } catch (error) {
      return {
        status: "disconnected",
        message:
          env.NODE_ENV === "development" && error instanceof Error
            ? error.message
            : "Database connection unreachable",
      };
    }
  }
}
