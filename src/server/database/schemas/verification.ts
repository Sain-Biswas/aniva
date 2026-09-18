import { sql } from "drizzle-orm";
import { index, sqliteTable } from "drizzle-orm/sqlite-core";

export const verification = sqliteTable(
	"verification",
	(table) => ({
		id: table.text("id").primaryKey(),
		identifier: table.text("identifier").notNull(),

		value: table.text("value").notNull(),

		expiresAt: table.integer("expires_at", { mode: "timestamp_ms" }).notNull(),

		createdAt: table
			.integer("created_at", { mode: "timestamp_ms" })
			.default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
			.notNull(),
		updatedAt: table
			.integer("updated_at", { mode: "timestamp_ms" })
			.default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
			.$onUpdate(() => new Date())
			.notNull()
	}),
	(table) => [index("verification_identifier_idx").on(table.identifier)]
);
