import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Clock, Users, BookOpen } from "lucide-react";

export function VideoShowcase() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="relative w-full py-20 lg:py-32 bg-[#020202] overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-[#0a0a0a] to-[#020202] pointer-events-none" />

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-orange-500/10 rounded-full blur-xl animate-float"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 200 + 50}px`,
                            height: `${Math.random() * 200 + 50}px`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${Math.random() * 10 + 10}s`,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 mb-6"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                        <span className="text-xs font-medium tracking-widest text-orange-400 uppercase">Product Demo</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                    >
                        Watch How AI Call Assistant Works
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-neutral-400"
                    >
                        Learn how to set up and use AI-powered sales calls in under 3 minutes
                    </motion.p>
                </div>

                {/* Video Player Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative max-w-[1000px] mx-auto"
                >
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 via-blue-500/20 to-orange-500/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/50 backdrop-blur-sm shadow-2xl aspect-video group">
                        {!isPlaying ? (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors duration-300 z-20 cursor-pointer" onClick={() => setIsPlaying(true)}>
                                {/* Thumbnail Image (Placeholder or YouTube Thumbnail) */}
                                <img
                                    src="https://img.youtube.com/vi/Sh3rF46yoKU/maxresdefault.jpg"
                                    alt="Video Thumbnail"
                                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/40" />

                                {/* Play Button */}
                                <div className="relative z-30 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(249,115,22,0.3)] group-hover:shadow-[0_0_50px_rgba(249,115,22,0.5)]">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/Sh3rF46yoKU?autoplay=1&rel=0"
                                title="AI Call Assistant Demo"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                            />
                        )}
                    </div>

                    {/* Video Stats */}
                    <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-sm font-medium text-neutral-400">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5">
                            <Clock className="w-4 h-4 text-orange-500" />
                            <span>2:45 mins</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5">
                            <Users className="w-4 h-4 text-blue-500" />
                            <span>10K+ views</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                            <BookOpen className="w-4 h-4 text-purple-500" />
                            <span>Quick Setup Guide</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
