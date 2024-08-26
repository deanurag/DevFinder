import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./src/db/schema.ts",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
}) as { schema: string; driver: string; dbCredentials: { connectionString: string }; verbose: boolean; strict: boolean; };