import z from "zod/v4-mini";

const envSchema = z.object({
	DATABASE_CONNECTION_STRING: z.string(),
});

export const env = envSchema.parse(process.env);
