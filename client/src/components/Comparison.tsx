import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

const features = [
    "Real-time AI Coaching",
    "Custom Script Builder",
    "Instant Call Summaries",
    "CRM Integration",
    "Advanced Analytics",
    "24/7 Support",
    "Free Trial",
    "Setup Time",
];

const comparisonData = {
    us: [true, true, true, true, true, true, true, "< 5 mins"],
    competitorA: [true, false, true, true, false, false, false, "2 weeks"],
    competitorB: [false, false, true, false, true, false, true, "1 month"],
    traditional: [false, false, false, false, false, false, false, "N/A"],
};

export function Comparison() {
    return (
        <section id="comparison" className="py-24 lg:py-32 bg-[#0A0A0A] relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-[1400px]">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 mb-8 backdrop-blur-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                        <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">Why Choose Us</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
                    >
                        See How We Stack Up <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200">
                            Against the Competition
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-neutral-400 max-w-2xl mx-auto"
                    >
                        The most comprehensive AI call assistant at the best value.
                    </motion.p>
                </div>

                {/* Comparison Table Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="overflow-x-auto pb-4"
                >
                    <div className="min-w-[1000px] grid grid-cols-5 gap-4">
                        {/* Column Headers */}
                        <div className="col-span-1 p-6 flex items-end pb-8">
                            <span className="text-lg font-bold text-white/40">Features</span>
                        </div>

                        {/* Us */}
                        <div className="col-span-1 relative p-8 rounded-t-2xl bg-orange-500/10 border-x border-t border-orange-500/30 text-center">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-orange-500/20">
                                RECOMMENDED
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">AI Call Assistant</h3>
                            <p className="text-orange-400 font-bold mb-4">Best Value</p>
                            <button className="w-full py-2 rounded-lg bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 transition-colors">
                                Start Free Trial
                            </button>
                        </div>

                        {/* Competitors */}
                        {["Competitor A", "Competitor B", "Traditional"].map((name) => (
                            <div key={name} className="col-span-1 p-8 text-center flex flex-col justify-end pb-8">
                                <h3 className="text-lg font-bold text-white/60">{name}</h3>
                            </div>
                        ))}

                        {/* Rows */}
                        {features.map((feature, i) => (
                            <div key={feature} className="contents group">
                                <div className="col-span-1 p-6 flex items-center border-b border-white/5 group-hover:bg-white/5 transition-colors">
                                    <span className="text-white font-medium">{feature}</span>
                                </div>

                                {/* Us Cell */}
                                <div className="col-span-1 p-6 flex items-center justify-center border-x border-b border-orange-500/10 bg-orange-500/5 group-hover:bg-orange-500/10 transition-colors relative">
                                    {renderCell(comparisonData.us[i], true)}
                                </div>

                                {/* Competitor Cells */}
                                <div className="col-span-1 p-6 flex items-center justify-center border-b border-white/5 group-hover:bg-white/5 transition-colors">
                                    {renderCell(comparisonData.competitorA[i])}
                                </div>
                                <div className="col-span-1 p-6 flex items-center justify-center border-b border-white/5 group-hover:bg-white/5 transition-colors">
                                    {renderCell(comparisonData.competitorB[i])}
                                </div>
                                <div className="col-span-1 p-6 flex items-center justify-center border-b border-white/5 group-hover:bg-white/5 transition-colors">
                                    {renderCell(comparisonData.traditional[i])}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function renderCell(value: boolean | string, isPrimary = false) {
    if (typeof value === "string") {
        return <span className={`font-bold ${isPrimary ? "text-white" : "text-white/40"}`}>{value}</span>;
    }
    if (value) {
        return (
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isPrimary ? "bg-orange-500 text-white" : "bg-white/10 text-white"}`}>
                <Check className="w-5 h-5" />
            </div>
        );
    }
    return <Minus className="w-6 h-6 text-white/20" />;
}
