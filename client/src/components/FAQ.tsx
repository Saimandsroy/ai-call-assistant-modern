import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI coaching work during calls?",
    answer: "Our AI listens to your conversation in real-time and provides context-aware suggestions, objection handling tips, and next best actions directly on your screen. It analyzes tone, keywords, and conversation flow to give you the most relevant guidance exactly when you need it.",
  },
  {
    question: "Is my call data secure and private?",
    answer: "Absolutely. We use enterprise-grade encryption (AES-256) for all data at rest and in transit. Your call recordings and transcripts are stored securely with SOC 2 Type II compliance. We never share or sell your data, and you maintain full ownership and control.",
  },
  {
    question: "What CRM platforms do you integrate with?",
    answer: "We integrate with 50+ popular platforms including Salesforce, HubSpot, Pipedrive, Zoho, Microsoft Dynamics, and many more. Our API also allows custom integrations with your existing tech stack.",
  },
  {
    question: "Can I try it before committing?",
    answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. You can experience the full power of our AI assistant before making any commitment.",
  },
  {
    question: "How long does setup take?",
    answer: "Most users are up and running in under 5 minutes. Simply connect your calling platform, link your CRM (optional), and you're ready to start your first AI-assisted call. Our onboarding wizard guides you through every step.",
  },
  {
    question: "Do you offer training for my team?",
    answer: "Yes! Professional and Enterprise plans include dedicated training sessions. We also provide extensive documentation, video tutorials, and a knowledge base. Enterprise customers get a dedicated success manager for personalized onboarding.",
  },
  {
    question: "What happens after the free trial?",
    answer: "After your 14-day trial, you can choose the plan that best fits your needs. If you don't subscribe, your account will be downgraded to a limited free tier. Your data is always preserved, and you can upgrade anytime.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel your subscription at any time with no questions asked. If you cancel, you'll continue to have access until the end of your current billing period. We also offer prorated refunds for annual plans.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-white/60">
            Everything you need to know about AI Call Assistant
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border-none"
              >
                <AccordionTrigger 
                  className="text-left text-white hover:text-primary hover:no-underline py-5"
                  data-testid={`accordion-trigger-${index}`}
                >
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-white/60 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
