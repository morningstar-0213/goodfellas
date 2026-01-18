import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const features = ["Posts", "Stories", "Reels", "Groups", "Private DMs", "Media Sharing"];

export function SocialShowcase() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section className="py-20 md:py-32 bg-black relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-indigo-600/20 rounded-full blur-[80px] md:blur-[128px] pointer-events-none translate-x-1/3 -translate-y-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                            Everything you need. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                                Nothing you don't.
                            </span>
                        </h2>
                        <p className="text-lg md:text-xl text-white/50 max-w-lg leading-relaxed mx-auto lg:mx-0">
                            A complete social suite built from the ground up for privacy. No ads, no tracking, no algorithmic manipulation.
                        </p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            {features.map((feature, i) => (
                                <motion.div
                                    key={feature}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.4 }}
                                    className="px-4 md:px-6 py-2 md:py-3 rounded-full bg-white/5 border border-white/10 text-sm md:text-base text-white/80 font-medium hover:bg-white/10 transition-colors cursor-default"
                                >
                                    {feature}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Phone Mockup */}
                    <div className="flex-1 w-full flex justify-center lg:justify-end relative">
                        {/* Background blobs */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-full blur-[60px] md:blur-[100px] pointer-events-none" />

                        <motion.div
                            style={{ y }} // Using y from useTransform defined earlier (need to ensure logic is there)
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative z-10 transform rotate-[-6deg] hover:rotate-0 transition-transform duration-700"
                        >
                            <div className="relative w-[280px] h-[550px] md:w-[320px] md:h-[650px] rounded-[2.5rem] md:rounded-[3rem] bg-[#0A0A0A] border-8 border-[#1a1a1a] shadow-2xl shadow-indigo-500/20 overflow-hidden ring-1 ring-white/10">
                                {/* Phone Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 md:w-32 h-6 md:h-7 bg-[#1a1a1a] rounded-b-xl md:rounded-b-2xl z-20" />

                                {/* Mockup Content */}
                                <div className="p-4 md:p-6 pt-12 md:pt-16 h-full flex flex-col gap-4 md:gap-6 bg-gradient-to-b from-indigo-950/20 to-black">
                                    {/* Feed Item 1 */}
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-purple-500" />
                                        <div className="flex-1 space-y-2">
                                            <div className="w-20 md:w-24 h-2 md:h-3 bg-white/10 rounded" />
                                            <div className="w-full h-24 md:h-32 bg-white/5 rounded-xl border border-white/5" />
                                            <div className="flex gap-2 pt-1 md:pt-2">
                                                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white/10" />
                                                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white/10" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Feed Item 2 */}
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-indigo-500" />
                                        <div className="flex-1 space-y-2">
                                            <div className="w-24 md:w-32 h-2 md:h-3 bg-white/10 rounded" />
                                            <div className="w-full h-20 md:h-24 bg-white/5 rounded-xl border border-white/5" />
                                        </div>
                                    </div>

                                    {/* Feed Item 3 */}
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-pink-500" />
                                        <div className="flex-1 space-y-2">
                                            <div className="w-20 md:w-24 h-2 md:h-3 bg-white/10 rounded" />
                                            <div className="w-full h-24 md:h-32 bg-white/5 rounded-xl border border-white/5" />
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Nav Mockup */}
                                <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 w-24 md:w-32 h-1 bg-white/20 rounded-full" />
                            </div>

                            {/* Traced Border Ring Effect around phone */}
                            <div className="absolute inset-0 rounded-[2.5rem] md:rounded-[3rem] border border-indigo-500/30 scale-105 -z-10 opacity-50" />
                            <div className="absolute inset-0 rounded-[2.5rem] md:rounded-[3rem] border border-purple-500/30 scale-110 -z-20 opacity-30" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
