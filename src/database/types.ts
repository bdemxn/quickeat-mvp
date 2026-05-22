import type { orders, products, sells, shops } from "./schemas";

export type Day =
	| "Monday"
	| "Tuesday"
	| "Wednesday"
	| "Thursday"
	| "Friday"
	| "Saturday"
	| "Sunday";

export type BusinessHours = {
	day: Day;
	start: number;
	end: number;
};

export type Shop = typeof shops.$inferSelect;
export type NewShop = typeof shops.$inferInsert;

export type Order = typeof orders.$inferSelect;
export type NewOrder = typeof orders.$inferInsert;

export type Product = typeof products.$inferSelect;
export type NewProduct = typeof products.$inferInsert;

export type Sell = typeof sells.$inferSelect;
export type NewSell = typeof sells.$inferInsert;
