import { sqliteTable } from "drizzle-orm/sqlite-core/table";

export const userSchema = sqliteTable("user", (table) => ({
	id: table.text("id").primaryKey(),
	name: table.text("name").notNull(),
	email: table.text("email").notNull().unique()
}));
