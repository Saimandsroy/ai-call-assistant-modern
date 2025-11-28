import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ParticleBackground } from "./ParticleBackground";
import { FloatingPhone } from "./FloatingPhone";
import { Sparkles, Calendar, CheckCircle2, Mic, FileText, Database } from "lucide-react";

const featureTabs = [
  { id: 1, label: "Live Coaching", icon: Mic },
  { id: 2, label: "Smart Scripts", icon: FileText },
  { id: 3, label: "Auto-CRM", icon: Database },
];

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-navy pt-20">
      <div className="absolute inset-0 bg-hero-gradient" />
      <ParticleBackground />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy/50 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center py-12 lg:py-0">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Badge 
                className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20 animate-pulse-glow"
                data-testid="badge-trust"
              >
                TRUSTED BY 2,500+ SALES TEAMS
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                <span className="gradient-text">AI-Powered</span>
                <br />
                Sales Call Assistant
              </h1>
              <p className="text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed">
                Real-time coaching, smart scripts, and instant call summaries. 
                Sound like a pro on every sales call with AI assistance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="gradient-orange text-white text-lg px-8 py-6 glow-orange-sm hover:glow-orange transition-all duration-300 group"
                data-testid="button-hero-trial"
              >
                <Sparkles className="w-5 h-5 mr-2 group-hover:animate-bounce-subtle" />
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 hover:border-white/40 text-lg px-8 py-6"
                data-testid="button-hero-demo"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap items-center gap-6 text-sm text-white/60"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>14-day free access</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {featureTabs.map((tab, index) => (
                <motion.button
                  key={tab.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full glass hover:bg-white/10 transition-all duration-300 group"
                  data-testid={`tab-feature-${tab.id}`}
                >
                  <span className="text-primary font-mono text-sm font-bold">0{tab.id}</span>
                  <tab.icon className="w-4 h-4 text-white/70 group-hover:text-primary transition-colors" />
                  <span className="text-white/80 text-sm font-medium">{tab.label}</span>
                </motion.button>
              ))}
            </motion.div>
          </div>

          <div className="relative lg:pl-8">
            <FloatingPhone />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
