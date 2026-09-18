import { sql } from "drizzle-orm/sql";
import { sqliteTable } from "drizzle-orm/sqlite-core/table";

export const user = sqliteTable("user", (table) => ({
	id: table.text("id").primaryKey(),
	name: table.text("name").notNull(),

	email: table.text("email").notNull().unique(),
	emailVerified: table.integer("email_verified", { mode: "boolean" }).default(false).notNull(),

	image: table.text("image"),

	createdAt: table
		.integer("created_at", { mode: "timestamp_ms" })
		.default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
		.notNull(),
	updatedAt: table
		.integer("updated_at", { mode: "timestamp_ms" })
		.default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
		.$onUpdate(() => new Date())
		.notNull()
}));
