import { useState } from "react";
import { motion } from "framer-motion";
import { PricingCard } from "./PricingCard";
import { Switch } from "@/components/ui/switch";

const plans = [
  {
    name: "Starter",
    price: "$49",
    annualPrice: "$39",
    description: "Perfect for individual sales reps",
    features: [
      "Up to 100 calls/month",
      "Real-time AI coaching",
      "Basic analytics",
      "CRM integration",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "$149",
    annualPrice: "$119",
    description: "For growing sales teams",
    features: [
      "Unlimited calls",
      "Advanced analytics",
      "Custom scripts",
      "Team collaboration",
      "Priority support",
      "API access",
      "Custom training",
    ],
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Dedicated account manager",
      "Custom integrations",
      "Advanced security",
      "SLA guarantee",
      "White-label option",
      "Training & onboarding",
      "Unlimited team size",
    ],
    isEnterprise: true,
  },
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(255,107,53,0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255,107,53,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Choose Your{" "}
            <span className="gradient-text">Plan</span>
          </h2>
          <p className="text-lg text-white/60">
            Start free, upgrade as you grow. All plans include a 14-day free trial.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span className={`text-sm font-medium transition-colors ${!isAnnual ? "text-white" : "text-white/60"}`}>
            Monthly
          </span>
          <Switch
            checked={isAnnual}
            onCheckedChange={setIsAnnual}
            data-testid="switch-billing"
          />
          <span className={`text-sm font-medium transition-colors ${isAnnual ? "text-white" : "text-white/60"}`}>
            Annual
          </span>
          {isAnnual && (
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
              Save 20%
            </span>
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              {...plan}
              isAnnual={isAnnual}
              index={index}
            />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/40 text-sm mt-12"
        >
          All plans include 24/7 access to our AI assistant. Cancel anytime.
        </motion.p>
      </div>
    </section>
  );
}
