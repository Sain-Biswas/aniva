import { defineRelations } from "drizzle-orm";
import * as schema from "~/server/database/schema";

export const relations = defineRelations(schema, (relation) => ({
	user: {
		sessions: relation.many.session({
			from: relation.user.id,
			to: relation.session.userId
		}),

		accounts: relation.many.account({
			from: relation.user.id,
			to: relation.account.userId
		})
	},

	session: {
		user: relation.one.user({
			from: relation.session.userId,
			to: relation.user.id
		})
	},

	account: {
		user: relation.one.user({
			from: relation.account.userId,
			to: relation.user.id
		})
	}
}));
