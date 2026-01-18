import { motion } from 'motion/react';
import { ShieldAlert } from 'lucide-react';

export function NetworkWarning() {
    return (
        <section className="py-24 bg-black relative overflow-hidden flex items-center justify-center">
            {/* Background warning glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 mb-8"
                >
                    <ShieldAlert className="w-4 h-4" />
                    <span className="text-sm font-medium uppercase tracking-wider">Tone of Reality</span>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.1]"
                    >
                        It may be <span className="text-white/40">slow</span> due to <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                            darkweb connections
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-bold text-white/90 pt-4"
                    >
                        ...but it's <span className="text-red-500 underline decoration-red-900/50 underline-offset-8">never</span> insecure.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
