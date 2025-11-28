import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertNewsletterSchema, insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);

      const existingSubscriber = await storage.getNewsletterSubscriberByEmail(validatedData.email);
      if (existingSubscriber) {
        return res.status(400).json({ 
          message: "This email is already subscribed to our newsletter." 
        });
      }

      const subscriber = await storage.createNewsletterSubscriber(validatedData);
      res.status(201).json({ 
        message: "Successfully subscribed!",
        subscriber: { id: subscriber.id, email: subscriber.email }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Please provide a valid email address.",
          errors: error.errors 
        });
      }
      console.error("Newsletter subscription error:", error);
      res.status(500).json({ message: "An error occurred. Please try again." });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.status(201).json({ 
        message: "Thank you for contacting us! We'll get back to you soon.",
        submission: { id: submission.id }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Please fill in all required fields.",
          errors: error.errors 
        });
      }
      console.error("Contact submission error:", error);
      res.status(500).json({ message: "An error occurred. Please try again." });
    }
  });

  return httpServer;
}
