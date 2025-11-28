import { motion } from "framer-motion";
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";

const stats = [
  { value: 2500, suffix: "+", label: "Sales Teams" },
  { value: 94, suffix: "%", label: "Win Rate Increase" },
  { value: 12, suffix: "M+", label: "Calls Analyzed" },
  { value: 50, suffix: "+", label: "Integrations" },
];

const companies = [
  "TechFlow", "SalesForce", "GrowthLab", "CloudSync", "DataPro",
  "MarketEdge", "SalesPipe", "LeadGen", "DealMaker", "RevenuePro",
];

const testimonials = [
  {
    quote: "This AI assistant helped me close 40% more deals in the first month. The real-time coaching is like having a sales mentor on every call.",
    name: "Sarah Johnson",
    title: "Senior Sales Manager",
    company: "TechCorp",
    rating: 5,
  },
  {
    quote: "The automatic CRM updates alone save me 2 hours every day. I can focus on selling instead of administrative work.",
    name: "Michael Chen",
    title: "Account Executive",
    company: "GrowthLab",
    rating: 5,
  },
  {
    quote: "Our team's average call quality score improved by 35% within the first week. The AI suggestions are incredibly accurate.",
    name: "Emily Rodriguez",
    title: "VP of Sales",
    company: "CloudSync",
    rating: 5,
  },
];

function CountUpStat({ value, suffix, label, index }: { value: number; suffix: string; label: string; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.5 });
  const { count, start } = useCountUp(value, 2000, false);

  useEffect(() => {
    if (isVisible) {
      start();
    }
  }, [isVisible, start]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
      data-testid={`stat-${label.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <p className="text-white/60 text-lg">{label}</p>
    </motion.div>
  );
}

export function Stats() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="stats" className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-navy" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by Top Sales Teams{" "}
            <span className="gradient-text">Worldwide</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-20">
          {stats.map((stat, index) => (
            <CountUpStat
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              index={index}
            />
          ))}
        </div>

        <div className="relative mb-20 overflow-hidden py-4">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy to-transparent z-10" />
          
          <div className="flex animate-marquee">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={`${company}-${index}`}
                className="flex-shrink-0 mx-8 px-6 py-3 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors duration-300"
              >
                <span className="text-white/40 hover:text-primary font-semibold text-lg transition-colors">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              <Quote className="w-16 h-16 text-primary/20" />
            </div>
            
            <div className="glass-card p-8 lg:p-12 rounded-2xl text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              
              <div className="relative z-10">
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <motion.p
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-xl lg:text-2xl text-white font-medium leading-relaxed mb-8"
                >
                  "{testimonials[activeTestimonial].quote}"
                </motion.p>

                <motion.div
                  key={`author-${activeTestimonial}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-14 h-14 rounded-full gradient-orange flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-lg">
                      {testimonials[activeTestimonial].name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <p className="text-white font-semibold">
                    {testimonials[activeTestimonial].name}
                  </p>
                  <p className="text-white/60 text-sm">
                    {testimonials[activeTestimonial].title} at {testimonials[activeTestimonial].company}
                  </p>
                </motion.div>

                <div className="flex justify-center gap-2 mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === activeTestimonial
                          ? "bg-primary w-8"
                          : "bg-white/20 hover:bg-white/40"
                      }`}
                      data-testid={`button-testimonial-${index}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
