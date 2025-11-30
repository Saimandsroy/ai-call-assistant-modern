import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, CreditCard } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="py-32 relative overflow-hidden bg-[#050505]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/20 via-[#050505] to-[#050505]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-orange-500/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto glass-card rounded-2xl md:rounded-[32px] p-8 md:p-12 lg:p-20 text-center border border-white/10 relative overflow-hidden"
        >
          {/* Glow overlay */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-2xl bg-orange-500/10 blur-[100px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6 md:mb-8"
          >
            <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-orange-500"></span>
            </span>
            <span className="text-orange-400 text-xs md:text-sm font-bold tracking-widest uppercase">
              Ready to Get Started?
            </span>
          </motion.div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tight leading-tight px-4">
            Transform Your <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-200 to-orange-400">
              Sales Calls Today
            </span>
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-neutral-400 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            Join 2,500+ teams already closing more deals with AI.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-8 md:mb-12 px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto h-14 md:h-16 px-8 md:px-10 text-base md:text-lg bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_50px_rgba(249,115,22,0.5)] hover:scale-105 transition-all duration-300"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-14 md:h-16 px-8 md:px-10 text-base md:text-lg border-white/20 text-white hover:bg-white/5 hover:border-white/40 rounded-full"
            >
              Book a Demo
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm text-neutral-500 font-medium px-4">
            <div className="flex items-center gap-2">
              <CreditCard className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
