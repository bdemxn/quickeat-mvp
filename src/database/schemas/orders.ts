import {
	boolean,
	integer,
	jsonb,
	pgTable,
	text,
	timestamp,
	uuid,
} from "drizzle-orm/pg-core";
import type { Product } from "../types";
import { user } from "./auth";
import { shops } from "./shops";

export const orders = pgTable("orders", {
	id: uuid("id").primaryKey().defaultRandom(),
	status: integer("status").notNull(),
	buyerId: text("buyer_id")
		.notNull()
		.references(() => user.id),
	shopId: uuid("shop_id")
		.notNull()
		.references(() => shops.id),
	products: jsonb("products").$type<Product[]>(),
	totalPaid: integer("total_paid"),
	isInLocal: boolean("is_local").notNull().default(true),
	address: text("address"),
	tableNum: integer("table_num"),
	createdAt: timestamp("created_at"),
});
