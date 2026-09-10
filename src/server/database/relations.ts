import { defineRelations } from "drizzle-orm";
import * as schema from "~/server/database/schema";

export const relations = defineRelations(schema, (_relation) => ({}));
