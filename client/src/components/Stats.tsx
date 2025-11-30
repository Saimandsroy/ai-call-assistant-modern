import { motion } from "framer-motion";
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";
import { useEffect } from "react";
import { Star, Quote, TrendingUp, Users, Phone, Award } from "lucide-react";

const stats = [
  { value: 10, suffix: "M+", label: "Calls Analyzed", icon: Phone },
  { value: 2500, suffix: "+", label: "Active Teams", icon: Users },
  { value: 40, suffix: "%", label: "More Sales", icon: TrendingUp },
  { value: 4.9, suffix: "", label: "User Rating", icon: Award },
];

const testimonials = [
  {
    quote: "This AI assistant helped me close 40% more deals in the first month. The real-time coaching is like having a sales mentor on every call.",
    name: "Sarah Johnson",
    title: "Senior Sales Manager",
    company: "TechCorp",
    image: "https://i.pravatar.cc/150?u=sarah",
    rating: 5,
  },
  {
    quote: "The automatic CRM updates alone save me 2 hours every day. I can focus on selling instead of administrative work.",
    name: "Michael Chen",
    title: "Account Executive",
    company: "GrowthLab",
    image: "https://i.pravatar.cc/150?u=michael",
    rating: 5,
  },
  {
    quote: "Our team's average call quality score improved by 35% within the first week. The AI suggestions are incredibly accurate.",
    name: "Emily Rodriguez",
    title: "VP of Sales",
    company: "CloudSync",
    image: "https://i.pravatar.cc/150?u=emily",
    rating: 5,
  },
];

function CountUpStat({ value, suffix, label, icon: Icon, index }: { value: number; suffix: string; label: string; icon: any; index: number }) {
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
      className="glass-card p-6 rounded-2xl border border-white/10 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-4 text-orange-500 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6" />
        </div>

        <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
          {count.toLocaleString()}{suffix}
        </div>
        <p className="text-white/60 font-medium">{label}</p>
      </div>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section id="success-stories" className="py-24 lg:py-32 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-[1400px]">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 mb-8 backdrop-blur-sm animate-float"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">Trusted by Thousands</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Join 2,500+ Teams <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200">
              Closing More Deals with AI
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-neutral-400 max-w-2xl mx-auto"
          >
            See how sales teams are transforming their performance with AI Call Assistant.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-24">
          {stats.map((stat, index) => (
            <CountUpStat
              key={stat.label}
              {...stat}
              index={index}
            />
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card p-10 rounded-[20px] border border-white/10 relative group hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-8 right-8 w-10 h-10 text-orange-500/20" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                  ))}
                </div>

                <p className="text-lg text-white leading-relaxed italic mb-8 flex-grow">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full border-2 border-orange-500/30 p-0.5">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-neutral-400 text-sm">{testimonial.title}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
