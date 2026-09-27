import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import { env } from "./config/env";
import { apiRateLimiter } from "./middleware/rateLimiter.middleware";
import { notFoundHandler } from "./middleware/notFound.middleware";
import { errorHandler } from "./middleware/error.middleware";
import rootRouter from "./routes";

const app: Application = express();

// 1. Production Security Headers
app.use(helmet());

// 2. CORS Configuration
const allowedOrigins = env.FRONTEND_URL.split(",").map((origin) =>
  origin.trim()
);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. mobile apps, curl, server-to-server)
      if (!origin) return callback(null, true);

      if (
        env.NODE_ENV === "development" ||
        allowedOrigins.includes(origin) ||
        allowedOrigins.includes("*")
      ) {
        return callback(null, true);
      }

      return callback(
        new Error(`CORS policy error: Origin ${origin} is not allowed.`)
      );
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  })
);

// 3. Body Parsing Middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// 4. Rate Limiting
app.use("/api", apiRateLimiter);

// 5. Mount API Routes
app.use("/api", rootRouter);

// 6. 404 Route Catch-All
app.use(notFoundHandler);

// 7. Centralized Error Handling
app.use(errorHandler);

export default app;
