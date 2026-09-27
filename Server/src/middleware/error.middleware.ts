import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { env } from "../config/env";
import { sendError } from "../utils/apiResponse";

export const errorHandler = (
  err: unknown,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
): void => {
  // 1. Handle Zod Validation Errors
  if (err instanceof ZodError) {
    const formattedErrors = err.errors.map((e) => ({
      field: e.path.join("."),
      message: e.message,
    }));
    sendError(res, "Validation error", 400, formattedErrors);
    return;
  }

  // 2. Handle JSON Parsing Syntax Errors
  if (err instanceof SyntaxError && "body" in err) {
    sendError(res, "Malformed JSON body in request", 400);
    return;
  }

  // 3. Log unexpected server errors in development/production
  if (env.NODE_ENV !== "test") {
    console.error("💥 Unhandled Error:", err);
  }

  // 4. Fallback Generic Internal Server Error
  const message =
    err instanceof Error && env.NODE_ENV === "development"
      ? err.message
      : "Internal server error";

  const errors =
    err instanceof Error && env.NODE_ENV === "development"
      ? { stack: err.stack }
      : undefined;

  sendError(res, message, 500, errors);
};
