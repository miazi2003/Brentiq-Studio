import { Router } from "express";
import { HealthController } from "../controllers/health.controller";

const router = Router();

router.get("/", HealthController.checkSystemHealth);
router.get("/db", HealthController.checkDatabaseHealth);

export default router;
