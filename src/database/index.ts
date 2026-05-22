import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { env } from "@/lib/env";
import * as schema from "./schemas";

const client = neon(env.DATABASE_CONNECTION_STRING);
export const database = drizzle(client, { schema });
