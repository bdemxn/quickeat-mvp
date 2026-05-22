import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { magicLink, organization } from "better-auth/plugins";
import { database } from "@/database";

export const auth = betterAuth({
	database: drizzleAdapter(database, {
		provider: "pg",
	}),

	emailAndPassword: {
		enabled: true,
	},

	plugins: [
		organization(),
		magicLink({
			sendMagicLink: () => {},
		}),
	],
});
