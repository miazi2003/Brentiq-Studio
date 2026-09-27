import rateLimit from "express-rate-limit";
import { sendError } from "../utils/apiResponse";

export const apiRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200, // Limit each IP to 200 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  handler: (_req, res) => {
    return sendError(
      res,
      "Too many requests from this IP, please try again later.",
      429
    );
  },
});
