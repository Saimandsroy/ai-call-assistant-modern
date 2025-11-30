import { motion } from "framer-motion";
import { Plug, Settings, Rocket, ArrowRight, Check } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Plug,
    title: "Connect Your System",
    description: "Integrate with your existing phone system in seconds. Works with all major CRM and calling platforms.",
  },
  {
    number: "02",
    icon: Settings,
    title: "Customize Your AI",
    description: "Set up smart scripts, coaching prompts, and call summaries tailored to your sales process.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch & Scale",
    description: "Go live with AI-powered calls. Monitor performance and optimize in real-time with instant insights.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] relative overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-orange-500/5 rounded-full blur-xl animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 150 + 50}px`,
              height: `${Math.random() * 150 + 50}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-medium tracking-widest text-orange-400 uppercase">How It Works</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-6 tracking-tight leading-tight"
          >
            Start Using AI Call Assistant in <span className="text-orange-500">3 Simple Steps</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-[#A0A0A0] max-w-2xl mx-auto"
          >
            No technical expertise required. Get up and running in under 5 minutes.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[100px] left-[16%] right-[16%] h-[2px] z-0">
            <svg className="w-full h-full overflow-visible">
              <motion.path
                d="M0,1 L1000,1"
                fill="none"
                stroke="url(#orange-gradient)"
                strokeWidth="2"
                strokeDasharray="8 8"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="orange-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255, 107, 53, 0.1)" />
                  <stop offset="50%" stopColor="rgba(255, 107, 53, 0.5)" />
                  <stop offset="100%" stopColor="rgba(255, 107, 53, 0.1)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-[20px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/30 hover:shadow-[0_10px_40px_-10px_rgba(255,107,53,0.15)] group-hover:bg-[rgba(255,255,255,0.05)]">

                {/* Step Number Badge */}
                <div className="flex justify-center mb-8 relative z-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A] flex items-center justify-center shadow-[0_0_20px_rgba(255,107,53,0.4)] group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl md:text-3xl font-bold text-white">{step.number}</span>
                  </div>
                </div>

                {/* Arrow Icon (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-[100px] -right-[26px] z-10 text-orange-500/50 transform translate-x-1/2">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}

                {/* Arrow Icon (Mobile) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 z-10 text-orange-500/50">
                    <ArrowRight className="w-6 h-6 rotate-90" />
                  </div>
                )}

                {/* Content */}
                <div className="text-center relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-orange-500/10 text-orange-500 group-hover:text-white group-hover:bg-orange-500 transition-colors duration-300">
                    <step.icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300">
                    {step.title}
                  </h3>

                  <p className="text-[#B0B0B0] leading-relaxed text-base">
                    {step.description}
                  </p>

                  {/* Checkmark Indicator */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                      <Check className="w-3 h-3 text-green-500" />
                      <span className="text-xs font-medium text-green-400">Step Complete</span>
                    </div>
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
