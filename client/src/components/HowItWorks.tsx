import { motion } from "framer-motion";
import { Plug, Phone, Trophy } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Plug,
    title: "Connect Your Tools",
    description: "Link your CRM, calendar, and calling platform in under 2 minutes with our simple integrations.",
  },
  {
    number: "02",
    icon: Phone,
    title: "Start Your First Call",
    description: "Our AI joins your call and provides real-time coaching and suggestions as you speak.",
  },
  {
    number: "03",
    icon: Trophy,
    title: "Watch Your Results Improve",
    description: "Track improvements in call quality, conversion rates, and deal velocity over time.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,107,53,0.15) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Get Started in{" "}
            <span className="gradient-text">3 Simple Steps</span>
          </h2>
          <p className="text-lg text-white/60">
            From setup to success in minutes, not months. Our streamlined process gets you closing deals faster.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
                data-testid={`step-${step.number}`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-8">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                      className="w-24 h-24 rounded-full gradient-orange flex items-center justify-center glow-orange relative z-10"
                    >
                      <step.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-navy border-2 border-primary flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">{step.number}</span>
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-semibold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-12 left-full w-full items-center justify-center -translate-x-1/2 z-0">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.3 + 0.5 }}
                      className="h-0.5 bg-gradient-to-r from-primary/50 to-primary/20"
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.3 + 1 }}
                      className="absolute right-0 w-3 h-3 rounded-full bg-primary"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
