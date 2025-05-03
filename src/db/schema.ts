import {
  pgTable,
  serial,
  text,
  timestamp,
  pgEnum,
  integer,
} from "drizzle-orm/pg-core";

export const statusEnum = pgEnum("status", [
  "open",
  "paid",
  "void",
  "uncollectible",
]);

export const Invoice = pgTable("invoices", {
  id: serial("id").primaryKey().notNull(),
  createTs: timestamp("create_ts").notNull().defaultNow(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  value: integer("value").notNull(),
  description: text("description").notNull(),
  status: statusEnum("status").notNull(),
});
