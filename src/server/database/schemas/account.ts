import { index, sqliteTable } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm/sql";
import { user } from "./user";

export const account = sqliteTable(
	"account",
	(table) => ({
		id: table.text("id").primaryKey(),
		accountId: table.text("account_id").notNull(),
		providerId: table.text("provider_id").notNull(),
		userId: table
			.text("user_id")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),

		accessToken: table.text("access_token"),
		refreshToken: table.text("refresh_token"),

		idToken: table.text("id_token"),

		accessTokenExpiresAt: table.integer("access_token_expires_at", {
			mode: "timestamp_ms"
		}),
		refreshTokenExpiresAt: table.integer("refresh_token_expires_at", {
			mode: "timestamp_ms"
		}),

		scope: table.text("scope"),
		password: table.text("password"),

		createdAt: table
			.integer("created_at", { mode: "timestamp_ms" })
			.default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
			.notNull(),

		updatedAt: table
			.integer("updated_at", { mode: "timestamp_ms" })
			.$onUpdate(() => new Date())
			.notNull()
	}),
	(table) => [index("account_userId_idx").on(table.userId)]
);
