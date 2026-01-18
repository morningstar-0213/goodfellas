import { Share2, MessageCircle, Heart, Users, Video, EyeOff, Check, X, Shield } from 'lucide-react';
import { motion } from 'motion/react';

const socialFeatures = [
    {
        icon: MessageCircle,
        title: "Encrypted Messaging",
        desc: "Individual and group chats with military-grade encryption"
    },
    {
        icon: Heart,
        title: "Stories & Posts",
        desc: "Share moments that disappear after 24 hours"
    },
    {
        icon: Video,
        title: "Reels",
        desc: "Short-form video content with privacy controls"
    },
    {
        icon: Users,
        title: "Private Profiles",
        desc: "Granular control over who sees your content"
    },
    {
        icon: EyeOff,
        title: "Anonymous Reactions",
        desc: "React to posts without exposing your identity"
    },
    {
        icon: Share2,
        title: "Secure Sharing",
        desc: "Share files and media with end-to-end encryption"
    }
];

export function Features() {
    return (
        <section className="py-16 md:py-32 bg-black">
            <div className="container mx-auto px-4">
                <div className="mb-12 md:mb-20 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white">Complete Social Platform</h2>
                    <p className="text-white/40 text-base md:text-lg">All the features you love, with privacy you deserve</p>
                </div>

                {/* Comparison Section - Red vs Green */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-32 max-w-5xl mx-auto">
                    {/* Other Apps (Red) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-6 md:p-8 rounded-[24px] md:rounded-[32px] bg-[#0F0505] border border-red-500/10 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                                <EyeOff className="w-5 h-5" />
                            </div>
                            <h3 className="text-2xl font-bold text-red-500">Other Apps</h3>
                        </div>

                        <ul className="space-y-4">
                            {["Collect your personal data", "Sell data to advertisers", "Track your behavior", "Cooperate with surveillance"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-red-200/60">
                                    <X className="w-5 h-5 text-red-500 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Goodfellas (Green) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-6 md:p-8 rounded-[24px] md:rounded-[32px] bg-[#050F05] border border-green-500/10 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                                <Shield className="w-5 h-5" />
                            </div>
                            <h3 className="text-2xl font-bold text-green-500">goodfellas</h3>
                        </div>

                        <ul className="space-y-4">
                            {["Zero data collection", "No ads, ever", "Anonymous by default", "Untraceable communications"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-green-200/60">
                                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Feature Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {socialFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group p-6 md:p-8 rounded-[20px] md:rounded-[24px] bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                            <p className="text-white/40 leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
