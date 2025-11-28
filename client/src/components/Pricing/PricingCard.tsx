import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string;
  annualPrice?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  isEnterprise?: boolean;
  isAnnual: boolean;
  index: number;
}

export function PricingCard({
  name,
  price,
  annualPrice,
  description,
  features,
  isPopular,
  isEnterprise,
  isAnnual,
  index,
}: PricingCardProps) {
  const displayPrice = isAnnual && annualPrice ? annualPrice : price;

  const nameSlug = name.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative ${isPopular ? "lg:-mt-4 lg:mb-4" : ""}`}
      data-testid={`card-pricing-${nameSlug}`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <div className="px-4 py-1.5 gradient-orange rounded-full text-white text-sm font-semibold glow-orange-sm">
            Best Value
          </div>
        </div>
      )}

      <div
        className={`h-full rounded-2xl p-8 transition-all duration-300 ${
          isPopular
            ? "glass-card border-primary/30 glow-orange-sm hover:glow-orange"
            : "glass-card hover:border-white/20"
        }`}
      >
        <div className="mb-8">
          <h3 className="font-heading text-2xl font-bold text-white mb-2" data-testid={`text-pricing-name-${nameSlug}`}>
            {name}
          </h3>
          <p className="text-white/60 text-sm">{description}</p>
        </div>

        <div className="mb-8">
          {isEnterprise ? (
            <div className="text-4xl font-heading font-bold text-white" data-testid={`text-pricing-price-${nameSlug}`}>
              Custom
            </div>
          ) : (
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-heading font-bold text-white" data-testid={`text-pricing-price-${nameSlug}`}>
                {displayPrice}
              </span>
              <span className="text-white/60">/month</span>
            </div>
          )}
          {isAnnual && !isEnterprise && (
            <p className="text-primary text-sm mt-2" data-testid={`text-pricing-save-${nameSlug}`}>Save 20% annually</p>
          )}
        </div>

        <ul className="space-y-4 mb-8">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-white/80 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          className={`w-full ${
            isPopular
              ? "gradient-orange text-white hover:glow-orange"
              : "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20"
          }`}
          size="lg"
          data-testid={`button-pricing-${name.toLowerCase()}`}
        >
          {isEnterprise ? "Contact Sales" : "Start Free Trial"}
        </Button>
      </div>
    </motion.div>
  );
}
