import { createAuthClient } from "better-auth/client";
import {
	magicLinkClient,
	organizationClient,
} from "better-auth/client/plugins";

export const authClient = createAuthClient({
	plugins: [organizationClient(), magicLinkClient()],
});
