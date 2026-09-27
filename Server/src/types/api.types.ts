export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: unknown;
}

export interface HealthCheckData {
  uptime: number;
  timestamp: string;
  environment: string;
  version: string;
}

export interface DbHealthCheckData {
  status: "connected" | "disconnected";
  latencyMs?: number;
  message?: string;
}
