import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const newsletterSubscribers = pgTable("newsletter_subscribers", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  subscribedAt: timestamp("subscribed_at").defaultNow(),
});

export const insertNewsletterSchema = createInsertSchema(newsletterSubscribers).pick({
  email: true,
});

export type InsertNewsletter = z.infer<typeof insertNewsletterSchema>;
export type NewsletterSubscriber = typeof newsletterSubscribers.$inferSelect;

export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  message: text("message").notNull(),
  submittedAt: timestamp("submitted_at").defaultNow(),
});

export const insertContactSchema = createInsertSchema(contactSubmissions).pick({
  name: true,
  email: true,
  company: true,
  message: true,
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
