import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { env } from "@/lib/env";

const client = neon(env.DATABASE_CONNECTION_STRING);
export const database = drizzle(client);
