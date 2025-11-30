import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Headphones, FileText, Database, BarChart3, AudioWaveform, Puzzle, Zap, Lock, MousePointer2 } from "lucide-react";
import { MouseEvent } from "react";

const features = [
  {
    icon: Headphones,
    title: "Real-Time Call Coaching",
    description: "Get instant suggestions, objection handling tips, and conversation guidance while you're on the call.",
  },
  {
    icon: FileText,
    title: "AI-Powered Scripts",
    description: "Dynamic scripts that adapt to your prospect's responses, industry, and pain points in real-time.",
  },
  {
    icon: BarChart3,
    title: "Instant Call Summaries",
    description: "Automated summaries, action items, and key insights generated immediately after every conversation.",
  },
  {
    icon: Database,
    title: "CRM Integration",
    description: "Seamlessly syncs with Salesforce, HubSpot, and Pipedrive to keep your records up to date automatically.",
  },
  {
    icon: Zap,
    title: "Advanced Analytics",
    description: "Deep dive into team performance, conversion rates, and deal velocity with AI-driven insights.",
  },
  {
    icon: MousePointer2,
    title: "Lead Scoring",
    description: "AI analyzes conversation sentiment and intent to automatically score and prioritize your leads.",
  },
  {
    icon: AudioWaveform,
    title: "Voice Intelligence",
    description: "Analyze tone, pace, and talk-to-listen ratios to coach your team on communication best practices.",
  },
  {
    icon: Puzzle,
    title: "Auto-Follow-ups",
    description: "Generate personalized follow-up emails based on call context and agreed-upon next steps.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-grade encryption, SOC 2 compliance, and role-based access control to keep your data safe.",
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-3xl bg-white/5 border border-white/10 p-8 hover:border-orange-500/40 transition-colors duration-500 overflow-hidden"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 107, 53, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon Container */}
        <div className="mb-6 relative w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/20 to-transparent border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
          <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <feature.icon className="w-8 h-8 text-orange-500 relative z-10" />
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300">
          {feature.title}
        </h3>

        <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export function Features() {
  return (
    <section id="features" className="py-32 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
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
            <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">Powerful Features</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Everything You Need to <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200">
              Close More Deals
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-neutral-400 max-w-2xl mx-auto"
          >
            AI-powered features that transform your sales calls into revenue-generating machines.
          </motion.p>
        </div>

        {/* Ribbon / Marquee Layout */}
        <div className="relative w-full overflow-hidden mask-gradient-x">
          <div className="flex gap-8 animate-marquee hover:pause w-max">
            {/* First set of cards */}
            {features.map((feature, index) => (
              <div key={`f1-${index}`} className="w-[350px] flex-shrink-0">
                <FeatureCard feature={feature} index={index} />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {features.map((feature, index) => (
              <div key={`f2-${index}`} className="w-[350px] flex-shrink-0">
                <FeatureCard feature={feature} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="mt-8 text-center md:hidden text-neutral-500 text-sm flex items-center justify-center gap-2">
          <MousePointer2 className="w-4 h-4 animate-bounce-x" />
          <span>Swipe to explore</span>
        </div>
      </div>
    </section>
  );
}
