import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  MousePointer2,
  Box,
  Move,
  PenTool,
  Image as ImageIcon,
  RotateCw,
  Move3d,
  Layers,
  Plus,
  Sparkles
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#020202] pt-20 font-sans selection:bg-orange-500/30 selection:text-orange-200">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0" />

      {/* Lighting Effects (God Rays & DJ Lights) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex justify-center">

        {/* DJ Spotlight Rig */}
        <div className="absolute top-[-50px] left-1/2 w-[800px] h-[800px] -translate-x-1/2 animate-rotate-rig z-0 opacity-30">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="spotlight-beam"
              style={{ "--i": i } as any}
            />
          ))}
        </div>

        {/* Old light beams removed - now originating from robot head */}

        {/* Top glow vignette */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          {/* Left Column: Text & CTA */}
          <div className="flex flex-col gap-8 items-start">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)] animate-pulse" />
              <span className="text-xs font-medium tracking-widest text-neutral-300 uppercase">AI Call Assistant 2.0 is live</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-7xl font-semibold text-white tracking-tight leading-[1.1]"
            >
              AI-Powered.<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">Sales Call Assistant.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-neutral-400 max-w-lg leading-relaxed font-light"
            >
              Real-time coaching, smart scripts, and instant call summaries. Sound like a pro on every sales call with AI assistance.
            </motion.p>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-6 w-full mt-2"
            >
              <button className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-neutral-900 border border-white/10 px-8 py-3.5 rounded-full text-white text-sm font-medium transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] btn-beam-orange relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  START FREE TRIAL
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              {/* Social Proof */}
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/5">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full border border-black bg-neutral-800" />
                  <div className="w-7 h-7 rounded-full border border-black bg-neutral-700" />
                  <div className="w-7 h-7 rounded-full border border-black bg-neutral-600" />
                </div>
                <span className="text-xs text-neutral-400 font-medium">Trusted by 2,500+ teams</span>
              </div>
            </motion.div>

            {/* Code Snippet */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 font-mono text-xs text-neutral-500 flex items-center gap-2"
            >
              <ChevronRight className="w-3 h-3 text-neutral-600" />
              <span className="text-neutral-400">npm</span> install @ai-call-assistant/core
            </motion.div>
          </div>

          {/* Right Column: 3D Scene */}
          {/* Right Column: 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center perspective-1000"
          >
            {/* 3D Scene Container */}
            <div className="relative w-full h-full max-w-lg mx-auto lg:max-w-none transform-style-3d">

              {/* Robot Container - Left Center */}
              <div className="absolute left-1/2 -translate-x-1/2 lg:left-[15%] lg:translate-x-0 top-1/2 -translate-y-1/2 z-20 w-56 h-80 animate-robot-sequence flex flex-col items-center scale-135">
                {/* Robot Head */}
                <div className="relative w-36 h-32 z-30 origin-bottom transition-transform duration-1000 animate-head-turn">
                  {/* Volumetric Light Beams from Head */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 z-[-1]">
                    <div className="robot-beam" style={{ "--r": "-45deg", height: "100vh" } as any} />
                    <div className="robot-beam" style={{ "--r": "-25deg", height: "110vh" } as any} />
                    <div className="robot-beam" style={{ "--r": "0deg", height: "120vh" } as any} />
                    <div className="robot-beam" style={{ "--r": "25deg", height: "110vh" } as any} />
                    <div className="robot-beam" style={{ "--r": "45deg", height: "100vh" } as any} />
                  </div>
                  <div className="absolute inset-0 bg-neutral-200 rounded-3xl shadow-xl overflow-hidden border border-white/50">
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-neutral-200 to-neutral-400" />
                    {/* Face Screen */}
                    <div className="absolute top-4 left-4 right-4 bottom-8 bg-black rounded-2xl overflow-hidden flex items-center justify-center border border-black/20 shadow-inner">
                      {/* Eyes */}
                      <div className="flex gap-6">
                        <div className="w-8 h-8 bg-[#00D9FF] rounded-full shadow-[0_0_15px_#00D9FF] animate-blink" />
                        <div className="w-8 h-8 bg-[#00D9FF] rounded-full shadow-[0_0_15px_#00D9FF] animate-blink" />
                      </div>
                    </div>
                  </div>
                  {/* Neck */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-neutral-400 rounded-b-lg shadow-inner" />
                </div>

                {/* Robot Body */}
                <div className="relative w-40 h-32 -mt-2 z-20">
                  <div className="absolute inset-0 bg-neutral-100 rounded-[2.5rem] shadow-xl border border-white/40">
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-100 to-neutral-300" />
                    {/* Chest Detail */}
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white/50 border border-white/60 flex items-center justify-center shadow-inner">
                      <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center animate-pulse-glow">
                        <div className="w-6 h-6 rounded-full bg-orange-500 shadow-[0_0_15px_#f97316]" />
                      </div>
                    </div>
                  </div>

                  {/* Arms */}
                  <div className="absolute top-6 -left-4 w-8 h-24 bg-neutral-300 rounded-full origin-top shadow-lg border border-white/20" /> {/* Left Arm (Static) */}

                  {/* Right Arm (Animated) */}
                  <div className="absolute top-6 -right-4 w-8 h-24 origin-top animate-arm-lift z-10">
                    <div className="w-8 h-16 bg-neutral-300 rounded-t-full border border-white/20 shadow-lg" />
                    <div className="absolute top-14 left-0 w-8 h-16 bg-neutral-300 rounded-b-full origin-top animate-forearm-lift border border-white/20 shadow-lg flex items-end justify-center pb-2">
                      {/* Phone in Hand */}
                      <div className="w-10 h-16 bg-black rounded-lg border border-neutral-700 shadow-lg transform translate-y-4 animate-phone-rotate flex flex-col items-center justify-center overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-black" />
                        <div className="absolute top-2 w-8 h-10 bg-white/10 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3D Phone Screen - Right Side */}
              <div className="absolute right-0 translate-x-4 lg:right-[5%] lg:translate-x-0 top-[40%] lg:top-1/2 -translate-y-1/2 z-10 w-80 lg:w-96 aspect-[9/19.5] bg-[#0A0A0A] rounded-[2.5rem] border-4 border-neutral-800 shadow-[0_20px_60px_rgba(0,0,0,0.5)] animate-float-screen transform-gpu transition-all duration-1000"
                style={{ transform: 'perspective(1000px) rotateY(-20deg) rotateX(5deg)' }}>

                {/* Screen Glow/Reflection */}
                <div className="absolute inset-0 rounded-[2.2rem] bg-gradient-to-tr from-blue-500/10 to-purple-500/10 pointer-events-none z-20" />

                {/* Phone UI Content */}
                <div className="absolute inset-1 bg-black rounded-[2.2rem] overflow-hidden flex flex-col">
                  {/* Status Bar */}
                  <div className="h-8 flex justify-between items-center px-6 pt-2">
                    <span className="text-[10px] text-white/60 font-medium">9:41</span>
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-neutral-800 border border-white/10" />
                      <div className="w-3 h-3 rounded-full bg-neutral-800 border border-white/10" />
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="px-6 py-4 border-b border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-white tracking-wide">AI Assistant</h3>
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-[10px] text-green-400 font-medium">Active Listening</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Suggestions Area */}
                  <div className="flex-1 p-5 flex flex-col justify-center gap-4">
                    <p className="text-[10px] text-neutral-500 font-medium uppercase tracking-wider mb-1 pl-1">Suggested Responses</p>

                    {/* Card 1 */}
                    <div className="p-4 bg-neutral-900/80 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg hover:bg-neutral-800/80 transition-all duration-300 cursor-pointer group/card animate-card-pulse" style={{ animationDelay: '0s' }}>
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                          <Sparkles className="w-2.5 h-2.5 text-blue-400" />
                        </div>
                        <p className="text-xs text-white/90 font-medium leading-relaxed group-hover/card:text-blue-200 transition-colors">"I'll call you back in 10 minutes."</p>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="p-4 bg-neutral-900/80 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg hover:bg-neutral-800/80 transition-all duration-300 cursor-pointer group/card animate-card-pulse" style={{ animationDelay: '0.2s' }}>
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 w-4 h-4 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                          <Sparkles className="w-2.5 h-2.5 text-purple-400" />
                        </div>
                        <p className="text-xs text-white/90 font-medium leading-relaxed group-hover/card:text-purple-200 transition-colors">"Can we reschedule for tomorrow?"</p>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="p-4 bg-neutral-900/80 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg hover:bg-neutral-800/80 transition-all duration-300 cursor-pointer group/card animate-card-pulse" style={{ animationDelay: '0.4s' }}>
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 w-4 h-4 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
                          <Sparkles className="w-2.5 h-2.5 text-orange-400" />
                        </div>
                        <p className="text-xs text-white/90 font-medium leading-relaxed group-hover/card:text-orange-200 transition-colors">"Please send details via email."</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Indicator */}
                  <div className="h-6 flex justify-center items-end pb-2">
                    <div className="w-16 h-1 bg-neutral-800 rounded-full" />
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div >
      </div >

      {/* Footer Plug */}
      < div className="fixed bottom-6 right-6 z-50" >
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#111] border border-white/10 rounded-lg shadow-lg hover:border-white/20 transition cursor-pointer">
          <span className="text-xs font-medium text-neutral-400 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-neutral-500" /> Made in Aura
          </span>
        </div>
      </div >
    </section >
  );
}
