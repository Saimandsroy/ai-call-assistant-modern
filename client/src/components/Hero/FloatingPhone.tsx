import { motion } from "framer-motion";
import { useMouseParallax } from "@/hooks/useMouseParallax";
import { Phone, Mic, Clock, Brain, Zap, TrendingUp } from "lucide-react";

export function FloatingPhone() {
  const parallax = useMouseParallax(0.02, 8);

  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0">
      <motion.div
        initial={{ opacity: 0, y: 50, rotateY: -15 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        style={{
          transform: `perspective(1000px) rotateX(${parallax.rotateX}deg) rotateY(${parallax.rotateY}deg) translateX(${parallax.x}px) translateY(${parallax.y}px)`,
        }}
        className="relative z-10"
      >
        <div className="relative mx-auto w-[280px] sm:w-[320px] animate-float">
          <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl flex items-center justify-center">
              <div className="w-16 h-4 bg-gray-800 rounded-full" />
            </div>
            
            <div className="bg-navy rounded-[2.5rem] overflow-hidden">
              <div className="h-[500px] sm:h-[560px] relative">
                <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy to-navy/90" />
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between pt-6">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                        <span className="text-lg">JD</span>
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">John Davidson</p>
                        <p className="text-white/60 text-xs">VP of Sales, TechCorp</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-green-400 text-xs">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      Live
                    </div>
                  </div>

                  <div className="space-y-3 mt-6">
                    <div className="glass rounded-xl p-3">
                      <div className="flex items-center gap-2 text-xs text-white/60 mb-2">
                        <Clock className="w-3 h-3" />
                        Call Duration
                      </div>
                      <p className="text-white font-mono text-2xl font-bold">12:34</p>
                    </div>

                    <div className="glass rounded-xl p-3">
                      <div className="flex items-center gap-2 text-xs text-white/60 mb-2">
                        <Brain className="w-3 h-3" />
                        AI Confidence
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "94%" }}
                            transition={{ duration: 1.5, delay: 1.2 }}
                            className="h-full gradient-orange rounded-full"
                          />
                        </div>
                        <span className="text-primary font-bold">94%</span>
                      </div>
                    </div>

                    <div className="glass rounded-xl p-3">
                      <div className="flex items-center gap-2 text-xs text-white/60 mb-2">
                        <Zap className="w-3 h-3 text-primary" />
                        Next Best Action
                      </div>
                      <p className="text-white text-sm leading-relaxed">
                        "Ask about their Q2 budget timeline and decision-making process"
                      </p>
                    </div>

                    <div className="glass rounded-xl p-3">
                      <div className="flex items-center gap-2 text-xs text-white/60 mb-2">
                        <TrendingUp className="w-3 h-3 text-green-400" />
                        Sentiment Score
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-400 font-bold text-lg">Positive</span>
                        <span className="text-white/40 text-xs">+15% from start</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center justify-center gap-1 h-12">
                    {[...Array(24)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-primary rounded-full"
                        animate={{
                          height: [8, Math.random() * 32 + 8, 8],
                        }}
                        transition={{
                          duration: 0.8,
                          delay: i * 0.05,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-4 bg-black/30 rounded-full blur-xl" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="absolute -right-4 top-20 glass-card p-3 rounded-xl animate-float hidden lg:block"
        style={{ animationDelay: "-2s" }}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-green-400" />
          </div>
          <div>
            <p className="text-white/60 text-xs">Win Rate</p>
            <p className="text-white font-bold">+47%</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute -left-8 bottom-40 glass-card p-3 rounded-xl animate-float-delayed hidden lg:block"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <Mic className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="text-white/60 text-xs">Calls Analyzed</p>
            <p className="text-white font-bold">1,247</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
