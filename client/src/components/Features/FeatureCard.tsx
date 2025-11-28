import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  visual?: "waveform" | "chart" | "sync" | "text" | "logos" | "screenshot";
}

export function FeatureCard({ icon: Icon, title, description, index, visual }: FeatureCardProps) {
  const titleSlug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
      data-testid={`card-feature-${titleSlug}`}
    >
      <div className="relative h-full glass-card p-6 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10">
          <div className="w-14 h-14 rounded-xl gradient-orange flex items-center justify-center mb-5 group-hover:glow-orange-sm transition-all duration-300">
            <Icon className="w-7 h-7 text-white" />
          </div>

          <h3 className="text-xl font-heading font-semibold text-white mb-3">
            {title}
          </h3>
          
          <p className="text-white/60 leading-relaxed mb-6">
            {description}
          </p>

          <div className="h-32 rounded-xl overflow-hidden bg-white/5 flex items-center justify-center">
            {visual === "waveform" && <WaveformVisual />}
            {visual === "chart" && <ChartVisual />}
            {visual === "sync" && <SyncVisual />}
            {visual === "text" && <TextVisual />}
            {visual === "logos" && <LogosVisual />}
            {visual === "screenshot" && <ScreenshotVisual />}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function WaveformVisual() {
  return (
    <div className="flex items-center justify-center gap-1 h-full px-8">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1.5 bg-primary rounded-full"
          animate={{
            height: [12, Math.random() * 48 + 12, 12],
          }}
          transition={{
            duration: 1,
            delay: i * 0.05,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
}

function ChartVisual() {
  const bars = [40, 60, 35, 80, 55, 90, 70];
  
  return (
    <div className="flex items-end justify-center gap-3 h-full px-6 pb-4">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          className="w-6 gradient-orange rounded-t"
          initial={{ height: 0 }}
          whileInView={{ height: `${height}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
        />
      ))}
    </div>
  );
}

function SyncVisual() {
  return (
    <div className="flex items-center justify-center gap-6 px-4">
      <motion.div
        className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center"
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-blue-400 font-bold text-xs">CRM</span>
      </motion.div>
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1, delay: i * 0.15, repeat: Infinity }}
          />
        ))}
      </div>
      <motion.div
        className="w-12 h-12 rounded-xl gradient-orange flex items-center justify-center"
        animate={{ x: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-white font-bold text-xs">AI</span>
      </motion.div>
    </div>
  );
}

function TextVisual() {
  return (
    <div className="space-y-2 px-4 py-2 w-full">
      <motion.div
        className="h-2 rounded-full bg-white/20"
        initial={{ width: "0%" }}
        whileInView={{ width: "90%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      <motion.div
        className="h-2 rounded-full bg-primary/60"
        initial={{ width: "0%" }}
        whileInView={{ width: "70%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      />
      <motion.div
        className="h-2 rounded-full bg-white/20"
        initial={{ width: "0%" }}
        whileInView={{ width: "85%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <motion.div
        className="h-2 rounded-full bg-primary/40"
        initial={{ width: "0%" }}
        whileInView={{ width: "60%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </div>
  );
}

function LogosVisual() {
  const logos = ["SF", "HS", "ZM", "SL", "PP"];
  
  return (
    <div className="flex items-center justify-center gap-3 px-4">
      {logos.map((logo, i) => (
        <motion.div
          key={i}
          className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,107,53,0.2)" }}
        >
          <span className="text-white/60 text-xs font-bold">{logo}</span>
        </motion.div>
      ))}
    </div>
  );
}

function ScreenshotVisual() {
  return (
    <div className="w-full h-full relative px-4 py-3">
      <div className="absolute inset-2 rounded-lg bg-navy/80 border border-white/10 overflow-hidden">
        <div className="h-4 bg-white/5 flex items-center px-2 gap-1">
          <div className="w-2 h-2 rounded-full bg-red-400/50" />
          <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
          <div className="w-2 h-2 rounded-full bg-green-400/50" />
        </div>
        <div className="p-2 space-y-1.5">
          <div className="h-1.5 w-3/4 bg-white/20 rounded" />
          <div className="h-1.5 w-1/2 bg-primary/40 rounded" />
          <div className="h-1.5 w-2/3 bg-white/10 rounded" />
        </div>
      </div>
    </div>
  );
}
