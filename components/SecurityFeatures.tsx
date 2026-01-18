import { Shield, Lock, Eye, Database, Fingerprint, Zap } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
    {
        icon: Shield,
        title: "TOR Network Routing",
        description: "All messages are routed through multiple encrypted layers across the TOR network, making it impossible to trace the origin or destination.",
        gradient: "from-purple-500 to-indigo-500",
        iconColor: "text-purple-400"
    },
    {
        icon: Lock,
        title: "End-to-End Encryption",
        description: "Military-grade AES-256 encryption ensures only you and your recipient can read messages. Keys are generated on your device and never leave it.",
        gradient: "from-pink-500 to-rose-500",
        iconColor: "text-pink-400"
    },
    {
        icon: Eye,
        title: "Zero-Knowledge Architecture",
        description: "We literally cannot read your messages. Our servers never see your encryption keys, metadata, or message content.",
        gradient: "from-orange-500 to-red-500",
        iconColor: "text-orange-400"
    },
    {
        icon: Database,
        title: "No Server Storage",
        description: "Messages are transmitted directly between devices through TOR relays. Once delivered, they exist only on your device.",
        gradient: "from-orange-400 to-amber-500",
        iconColor: "text-amber-400"
    },
    {
        icon: Fingerprint,
        title: "Anonymous Accounts",
        description: "No phone number, email, or personal information required. Your identity is protected by cryptographic keys only.",
        gradient: "from-blue-500 to-cyan-500",
        iconColor: "text-cyan-400"
    },
    {
        icon: Zap,
        title: "Perfect Forward Secrecy",
        description: "Each message uses unique encryption keys. Even if one key is compromised, past and future messages remain secure.",
        gradient: "from-yellow-400 to-orange-500",
        iconColor: "text-yellow-400"
    }
];

export function SecurityFeatures() {
    return (
        <section className="py-16 md:py-32 bg-black">
            <div className="container mx-auto px-4">
                <div className="mb-12 md:mb-20 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white tracking-tight">Unbreakable Security</h2>
                    <p className="text-white/40 max-w-2xl mx-auto text-base md:text-lg">
                        Built with privacy as the foundation, not an afterthought
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group p-6 rounded-[32px] bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Hover Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-500`}>
                                    <feature.icon className="w-7 h-7" />
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                                <p className="text-base text-white/50 leading-relaxed font-medium">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
