import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-orange" />
      
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-white/90 text-sm font-medium">
              Join 2,500+ sales teams today
            </span>
          </motion.div>

          <h2 
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            data-testid="text-cta-heading"
          >
            Ready to Transform
            <br />
            Your Sales Calls?
          </h2>

          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Start closing more deals with AI-powered insights, real-time coaching, and intelligent automation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all group"
              data-testid="button-cta-trial"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-lg px-8 py-6"
              data-testid="button-cta-demo"
            >
              Schedule a Demo
            </Button>
          </div>

          <p className="text-white/60 text-sm">
            No credit card required · 14-day trial · Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
