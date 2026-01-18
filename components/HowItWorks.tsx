import { Lock, Server, Shield } from 'lucide-react';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion'; // Changed from 'motion/react' to 'framer-motion' as it's more common and likely intended.
// motion import removed for static stability

const steps = [
    {
        number: "01",
        title: "Message Created",
        description: "You type a message. It's encrypted instantly on your device using your recipient's public key. The encryption happens locally—no data leaves until it's fully secured.",
        subtext: "AES-256 encryption with ephemeral keys",
        icon: Lock,
        gradient: "from-indigo-500 to-purple-500", // Updated gradient
        baseColor: "indigo", // New property for base color
        iconColor: "text-indigo-400"
    },
    {
        number: "02",
        title: "TOR Routing",
        description: "Encrypted message is routed through 3+ random TOR nodes worldwide, each adding a layer of encryption. Your IP, location, and identity remain completely hidden.",
        subtext: "Onion routing with perfect forward secrecy",
        icon: Server,
        gradient: "from-purple-500 to-pink-500", // Updated gradient
        baseColor: "purple", // New property for base color
        iconColor: "text-purple-400"
    },
    {
        number: "03",
        title: "Secure Delivery",
        description: "Message reaches recipient through TOR, gets decrypted only on their device with their private key. No server ever stores or can access the content.",
        subtext: "Zero server storage, zero metadata retention",
        icon: Shield,
        gradient: "from-blue-500 to-cyan-500", // Updated gradient
        baseColor: "blue", // New property for base color
        iconColor: "text-blue-400"
    }
];

export function HowItWorks() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="py-20 md:py-32 bg-black relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-indigo-600/10 rounded-full blur-[80px] md:blur-[128px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-600/10 rounded-full blur-[80px] md:blur-[128px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-24 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white">How It Works</h2>
                    <p className="text-white/40 max-w-2xl mx-auto text-base md:text-lg">
                        Your messages go through a multi-layered process to ensure maximum privacy and security.
                    </p>
                </motion.div>

                <div className="relative space-y-16 md:space-y-24">
                    {/* Vertical Line */}
                    <motion.div
                        className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-white/10 h-full origin-top"
                        style={{ scaleY: scrollYProgress }}
                    />

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16"
                        >
                            {/* Step Number */}
                            <div className="relative z-10 shrink-0 w-14 h-14 md:w-20 md:h-20 rounded-full bg-black border border-white/10 flex items-center justify-center text-xl md:text-3xl font-bold text-white">
                                {step.number}
                            </div>

                            {/* Content Card */}
                            <div className="relative flex-1 p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg max-w-2xl w-full">
                                {/* Orbiting Elements */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden rounded-3xl">
                                    {/* Inner Orbit */}
                                    <div className="absolute w-32 h-32 md:w-48 md:h-48 border border-white/10 rounded-full animate-[spin_8s_linear_infinite]">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                                    </div>

                                    {/* Middle Orbit (Reverse) */}
                                    <div className="absolute w-48 h-48 md:w-64 md:h-64 border border-white/5 rounded-full animate-[spin_12s_linear_infinite_reverse]">
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 md:w-4 md:h-4 bg-indigo-400 rounded-full shadow-[0_0_20px_rgba(129,140,248,0.6)]" />
                                    </div>

                                    {/* Outer Orbit */}
                                    <div className="absolute w-64 h-64 md:w-80 md:h-80 border border-white/5 rounded-full animate-[spin_15s_linear_infinite] opacity-60">
                                        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(192,132,252,0.6)]" />
                                    </div>
                                </div>

                                {/* Central Icon */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div
                                        className={`relative z-10 w-20 h-20 md:w-32 md:h-32 rounded-2xl md:rounded-3xl bg-gradient-to-br ${step.gradient.replace('/20', '')} flex items-center justify-center shadow-2xl shadow-indigo-500/20 transition-transform duration-300 hover:scale-110 hover:rotate-6`}
                                    >
                                        <step.icon className="w-10 h-10 md:w-16 md:h-16 text-white" />
                                    </div>
                                </div>
                                <div className="absolute -bottom-6 md:-bottom-10 left-1/2 -translate-x-1/2 text-[6rem] md:text-[10rem] font-bold text-white/5 select-none pointer-events-none theme-font">
                                    {index + 1}
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="flex-1 text-center md:text-left px-2 md:px-0">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">{step.title}</h3>
                                <p className="text-white/50 text-base md:text-lg leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Banner */}
                <div className="mt-20 md:mt-32 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border border-white/5 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Why This Matters</h3>
                    <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg">
                        In a world where data is the new oil, your privacy is the only thing you truly own. Don't give it away.
                    </p>
                </div>
            </div>

            {/* Floating dots decoration */}
            <div className="absolute top-10 right-10 w-2 h-2 rounded-full bg-white/20 animate-bounce delay-100" />
            <div className="absolute bottom-10 left-10 w-2 h-2 rounded-full bg-white/20 animate-bounce delay-700" />
        </section>
    );
}
