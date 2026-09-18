import { betterAuth } from "better-auth";
import { tanstackStartCookies } from "better-auth/tanstack-start";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { database } from "~/server/database";
import { account, session, user, verification } from "~/server/database/schema";

export const auth = betterAuth({
	database: drizzleAdapter(database, { provider: "sqlite", schema: { account, session, user, verification } }),

	emailAndPassword: {
		enabled: true,
		autoSignIn: true
	},

	appName: "Aniva",

	plugins: [tanstackStartCookies()]
});
