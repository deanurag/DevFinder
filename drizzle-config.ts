import { defineConfig } from 'drizzle-kit'

// export default defineConfig({
//   schema: "src/db/schema.ts",
//   out: "./drizzle",
//   dialect: 'postgresql',
//   dbCredentials: {
//     url: process.env.DATABASE_URL!,
//   },
//   verbose: true,
//   strict: true,
// } as {
//   schema: string;
//   out: string;
//   dialect: string;
//   dbCredentials: {
//     url: string;
//   };
//   verbose: boolean;
//   strict: boolean;
// })


export default defineConfig({
  schema: "src/db/schema.ts",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    
  },
  verbose: true,
  strict: true,
} as {
  schema: string;
  out: string;
  dialect: string;
  dbCredentials: {
    url: string;
  };
  verbose: boolean;
  strict: boolean;
})