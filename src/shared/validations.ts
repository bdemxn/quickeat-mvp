import z from "zod";

export const loginSchema = z.object({
	email: z.email().min(4),
	password: z.string().min(12),
});

export const registerSchema = loginSchema.extend({
	fullname: z.string().min(5),
});
