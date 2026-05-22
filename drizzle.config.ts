import { defineConfig } from "drizzle-kit";
import { env } from "@/lib/env";

export default defineConfig({
	dialect: "postgresql",
	schema: "./src/database/schemas/index.ts",
	out: "./drizzle",

	dbCredentials: {
		url: env.DATABASE_CONNECTION_STRING,
	},
});
