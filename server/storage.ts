import { 
  type User, 
  type InsertUser, 
  type NewsletterSubscriber,
  type InsertNewsletter,
  type ContactSubmission,
  type InsertContact
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createNewsletterSubscriber(data: InsertNewsletter): Promise<NewsletterSubscriber>;
  getNewsletterSubscriberByEmail(email: string): Promise<NewsletterSubscriber | undefined>;
  
  createContactSubmission(data: InsertContact): Promise<ContactSubmission>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private newsletterSubscribers: Map<string, NewsletterSubscriber>;
  private contactSubmissions: Map<string, ContactSubmission>;

  constructor() {
    this.users = new Map();
    this.newsletterSubscribers = new Map();
    this.contactSubmissions = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createNewsletterSubscriber(data: InsertNewsletter): Promise<NewsletterSubscriber> {
    const id = randomUUID();
    const subscriber: NewsletterSubscriber = {
      id,
      email: data.email,
      subscribedAt: new Date(),
    };
    this.newsletterSubscribers.set(id, subscriber);
    return subscriber;
  }

  async getNewsletterSubscriberByEmail(email: string): Promise<NewsletterSubscriber | undefined> {
    return Array.from(this.newsletterSubscribers.values()).find(
      (subscriber) => subscriber.email === email,
    );
  }

  async createContactSubmission(data: InsertContact): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = {
      id,
      name: data.name,
      email: data.email,
      company: data.company || null,
      message: data.message,
      submittedAt: new Date(),
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }
}

export const storage = new MemStorage();
