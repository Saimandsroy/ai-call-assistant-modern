import { motion } from "framer-motion";
import { FeatureCard } from "./FeatureCard";
import { Headphones, FileText, Database, BarChart3, AudioWaveform, Puzzle } from "lucide-react";

const features = [
  {
    icon: Headphones,
    title: "Real-Time AI Coaching",
    description: "Get instant suggestions, objection handling tips, and conversation guidance while you're on the call.",
    visual: "screenshot" as const,
  },
  {
    icon: FileText,
    title: "Smart Script Generation",
    description: "AI-powered scripts that adapt to your prospect's responses, industry, and pain points in real-time.",
    visual: "text" as const,
  },
  {
    icon: Database,
    title: "Automatic CRM Updates",
    description: "Call summaries, action items, and insights automatically synced to your CRM after every conversation.",
    visual: "sync" as const,
  },
  {
    icon: BarChart3,
    title: "Call Analytics Dashboard",
    description: "Track performance metrics, conversion rates, and AI-powered insights to improve your sales technique.",
    visual: "chart" as const,
  },
  {
    icon: AudioWaveform,
    title: "Voice & Tone Analysis",
    description: "Real-time feedback on your speaking pace, tone, and confidence to help you sound more persuasive.",
    visual: "waveform" as const,
  },
  {
    icon: Puzzle,
    title: "Integration Hub",
    description: "Seamlessly connects with Salesforce, HubSpot, Zoom, and 50+ other tools in your sales stack.",
    visual: "logos" as const,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy/50 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Everything You Need to{" "}
            <span className="gradient-text">Close More Deals</span>
          </h2>
          <p className="text-lg text-white/60">
            Powerful AI tools that transform every sales conversation into an opportunity for success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              visual={feature.visual}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
