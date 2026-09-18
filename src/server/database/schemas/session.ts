import { sqliteTable, index } from "drizzle-orm/sqlite-core";
import { user } from "./user";
import { sql } from "drizzle-orm/sql";

export const session = sqliteTable(
	"session",
	(table) => ({
		id: table.text("id").primaryKey(),
		expiresAt: table.integer("expires_at", { mode: "timestamp_ms" }).notNull(),
		token: table.text("token").notNull().unique(),

		ipAddress: table.text("ip_address"),
		userAgent: table.text("user_agent"),
		userId: table
			.text("user_id")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),

		createdAt: table
			.integer("created_at", { mode: "timestamp_ms" })
			.default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
			.notNull(),
		updatedAt: table
			.integer("updated_at", { mode: "timestamp_ms" })
			.$onUpdate(() => new Date())
			.notNull()
	}),
	(table) => [index("session_userId_idx").on(table.userId)]
);
