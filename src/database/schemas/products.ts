import {
	boolean,
	integer,
	jsonb,
	pgTable,
	text,
	timestamp,
	uuid,
} from "drizzle-orm/pg-core";
import { shops } from "./shops";

export const products = pgTable("products", {
	id: uuid("id").primaryKey().defaultRandom(),
	shopId: uuid("shop_id")
		.notNull()
		.references(() => shops.id),
	name: text("name").notNull(),
	price: integer("price").notNull(),
	quantity: integer("quantity").notNull(),
	discount: integer("discount"),
	isActive: boolean("is_active"),
	imageUrl: text("image_url"),
	extras: jsonb("extras"),
	createdAt: timestamp("created_at"),
});
