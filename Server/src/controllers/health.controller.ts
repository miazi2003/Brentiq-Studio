import { Request, Response, NextFunction } from "express";
import { HealthService } from "../services/health.service";
import { sendSuccess, sendError } from "../utils/apiResponse";

export class HealthController {
  public static checkSystemHealth(
    _req: Request,
    res: Response,
    next: NextFunction
  ): void {
    try {
      const data = HealthService.getSystemHealth();
      sendSuccess(res, "Brentiq API is running", data);
    } catch (error) {
      next(error);
    }
  }

  public static async checkDatabaseHealth(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const dbHealth = await HealthService.getDatabaseHealth();
      if (dbHealth.status === "connected") {
        sendSuccess(res, "Database connection is healthy", dbHealth);
      } else {
        sendError(res, "Database connection failed", 503, dbHealth);
      }
    } catch (error) {
      next(error);
    }
  }
}
