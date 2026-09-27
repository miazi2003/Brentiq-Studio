import http from "http";
import app from "./app";
import { env } from "./config/env";
import { prisma } from "./db/prisma";

const server = http.createServer(app);

const startServer = (): void => {
  server.listen(env.PORT, () => {
    console.log("==========================================");
    console.log(`🚀 Brentiq Studio Backend API is running!`);
    console.log(`📡 Environment: ${env.NODE_ENV}`);
    console.log(`🔗 Port:        ${env.PORT}`);
    console.log(`🏥 Health:      http://localhost:${env.PORT}/api/health`);
    console.log(`🏥 DB Health:   http://localhost:${env.PORT}/api/health/db`);
    console.log("==========================================");
  });
};

// Graceful Shutdown Handler
const handleGracefulShutdown = async (signal: string): Promise<void> => {
  console.log(`\n🛑 Received ${signal}. Gracefully shutting down...`);

  server.close(async () => {
    console.log("🔒 HTTP server closed.");
    try {
      await prisma.$disconnect();
      console.log("🔌 Database connection closed.");
      process.exit(0);
    } catch (err) {
      console.error("❌ Error while disconnecting database:", err);
      process.exit(1);
    }
  });

  // Force shutdown if taking too long
  setTimeout(() => {
    console.error("⚠️ Forceful shutdown after timeout.");
    process.exit(1);
  }, 10000);
};

process.on("SIGINT", () => handleGracefulShutdown("SIGINT"));
process.on("SIGTERM", () => handleGracefulShutdown("SIGTERM"));

startServer();
