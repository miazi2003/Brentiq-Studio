# Brentiq Studio Backend API (Phase 1)

Production-ready backend API foundation for Brentiq Studio built with Node.js, Express, TypeScript, PostgreSQL, and Prisma ORM.

---

## 🚀 Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript (Strict Mode)
- **Framework**: Express.js
- **Database ORM**: Prisma ORM with PostgreSQL
- **Security**: Helmet, CORS, Rate Limiting, Centralized Error Handling, Zod Validation

---

## 📁 Project Structure

```
brentiq-studio-backend/
├── src/
│   ├── config/             # Environment & configuration validators (Zod)
│   ├── controllers/        # Request handlers & controllers
│   ├── db/                 # Database client singleton (Prisma)
│   ├── middleware/         # Error handler, 404 handler, rate limiter
│   ├── routes/             # Express API routes
│   ├── services/           # Core business logic services
│   ├── types/              # TypeScript interface definitions
│   ├── utils/              # Standardized API response formatters
│   ├── validators/         # Input schemas (Zod)
│   ├── app.ts              # Express application setup
│   └── server.ts           # HTTP server listener & graceful shutdown
│
├── prisma/
│   └── schema.prisma       # Prisma schema & PostgreSQL connection
│
├── .env.example            # Environment variables template
├── .gitignore              # Ignored files (node_modules, .env, dist)
├── package.json            # Scripts & dependencies
├── tsconfig.json           # Strict TypeScript configuration
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root of `brentiq-studio-backend` based on `.env.example`:

```env
PORT=5000
NODE_ENV=development
DATABASE_URL="postgresql://postgres:password@localhost:5432/brentiq_db?schema=public"
FRONTEND_URL="http://localhost:3000"
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Generate Prisma Client
```bash
npm run prisma:generate
```

### 3. Run Development Server
```bash
npm run dev
```

The API will be running at `http://localhost:5000`.

---

## 📦 Available Scripts

| Script | Command | Purpose |
|---|---|---|
| `dev` | `npm run dev` | Start development server with live reload (`tsx watch`) |
| `build` | `npm run build` | Compile TypeScript into production `dist/` bundle |
| `start` | `npm run start` | Run compiled production build from `dist/server.js` |
| `typecheck` | `npm run typecheck` | Validate TypeScript types without emitting files |
| `prisma:generate` | `npm run prisma:generate` | Generate Prisma client from schema |
| `prisma:migrate` | `npm run prisma:migrate` | Run database migrations |

---

## 🏥 Health Check Endpoints

### 1. System Health
- **Endpoint**: `GET /api/health`
- **Response**:
```json
{
  "success": true,
  "message": "Brentiq API is running",
  "data": {
    "uptime": 12,
    "timestamp": "2026-09-28T01:25:00.000Z",
    "environment": "development",
    "version": "1.0.0"
  }
}
```

### 2. Database Health
- **Endpoint**: `GET /api/health/db`
- **Response**:
```json
{
  "success": true,
  "message": "Database connection is healthy",
  "data": {
    "status": "connected",
    "latencyMs": 4
  }
}
```
