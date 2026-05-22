import { integer, pgTable, timestamp, uuid } from "drizzle-orm/pg-core";
import { orders } from "./orders";
import { shops } from "./shops";

export const sells = pgTable("sells", {
	id: uuid("id").primaryKey().defaultRandom(),
	shopId: uuid("shop_id")
		.notNull()
		.references(() => shops.id),
	orderId: uuid()
		.notNull()
		.references(() => orders.id),
	totalPaid: integer("total_paid").notNull(),
	createdAt: timestamp("created_at"),
});
