import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Shield } from 'lucide-react';

export function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 300]); // Increased depth
    const y2 = useTransform(scrollY, [0, 500], [0, -250]); // Increased depth
    const opacity = useTransform(scrollY, [0, 400], [1, 0]); // Slower fade out

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
            {/* Parallax Background Elements */}
            <motion.div style={{ y: y1 }} className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-purple-600/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none" />
            <motion.div style={{ y: y2 }} className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-indigo-600/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 mb-6 md:mb-8 hover:bg-white/10 transition-colors cursor-pointer"
                    >
                        <Shield className="w-3 h-3 md:w-4 md:h-4 text-indigo-400 animate-pulse" />
                        <span className="text-xs md:text-sm font-medium text-indigo-300">Military-Grade Encryption</span>
                    </motion.div>

                    <motion.h1
                        style={{ opacity }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tight mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
                    >
                        The world's most <br />
                        <span className="text-white">secure messaging platform</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="text-lg md:text-2xl text-white/40 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4 md:px-0"
                    >
                        Powered by TOR network. Zero-knowledge architecture. <br className="hidden md:block" />
                        Not even governments or developers can access your conversations—even if they wanted to.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 md:px-0"
                    >
                        <button className="w-full sm:w-auto px-8 py-3 md:py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group text-sm md:text-base relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                            <span className="relative z-10 flex items-center gap-2">
                                Explore Security
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                        <button className="w-full sm:w-auto px-8 py-3 md:py-4 bg-white/5 text-white rounded-full font-bold border border-white/10 hover:bg-white/10 transition-all text-sm md:text-base backdrop-blur-sm">
                            Learn How It Works
                        </button>
                    </motion.div>

                    {/* Stats Section with Traced Box Effect */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="mt-16 md:mt-24 pt-10"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 px-4 md:px-0">
                            <div className="group relative p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-colors overflow-hidden backdrop-blur-sm">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
                                <div className="text-center relative z-10">
                                    <h3 className="text-3xl md:text-4xl font-bold font-mono text-white mb-2">0%</h3>
                                    <p className="text-xs md:text-sm text-white/40 uppercase tracking-widest font-medium">Data Collected</p>
                                </div>
                            </div>
                            <div className="group relative p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-colors overflow-hidden backdrop-blur-sm">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
                                <div className="text-center relative z-10">
                                    <h3 className="text-3xl md:text-4xl font-bold font-mono text-white mb-2">AES-256</h3>
                                    <p className="text-xs md:text-sm text-white/40 uppercase tracking-widest font-medium">Military Grade</p>
                                </div>
                            </div>
                            <div className="group relative p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-colors overflow-hidden backdrop-blur-sm">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
                                <div className="text-center relative z-10">
                                    <h3 className="text-3xl md:text-4xl font-bold font-mono text-white mb-2">∞</h3>
                                    <p className="text-xs md:text-sm text-white/40 uppercase tracking-widest font-medium">Privacy Guaranteed</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
