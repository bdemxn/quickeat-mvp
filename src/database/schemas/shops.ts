import {
	boolean,
	jsonb,
	pgTable,
	text,
	timestamp,
	uuid,
	varchar,
} from "drizzle-orm/pg-core";
import type { BusinessHours } from "@/database/types";
import { organization } from "./auth";

export const shops = pgTable("shops", {
	id: uuid("id").primaryKey().defaultRandom(),
	orgId: text("org_id")
		.notNull()
		.references(() => organization.id),
	address: text("address").notNull(),
	currency: varchar("currency", { length: 5 }).notNull(),
	is247: boolean("is_247").default(true),
	businessHours: jsonb("business_hours").$type<BusinessHours[]>(),
	createdAt: timestamp("created_at").defaultNow(),
});
