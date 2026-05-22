import z from "zod";

const envSchema = z.object({
	DATABASE_CONNECTION_STRING: z.string(),
});

export const env = envSchema.parse(process.env);
