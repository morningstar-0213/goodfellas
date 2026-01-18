import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Image as ImageIcon, Lock, Send, MoreVertical, Video, Phone, Heart, Play, User, Bookmark, Shield } from 'lucide-react';

const features = [
    {
        title: "Encrypted Chats",
        description: "End-to-end encrypted conversations. Your messages are locked with keys that only exist on your device and your recipient's.",
        color: "from-indigo-500 to-purple-500",
        index: 0
    },
    {
        title: "Ephemeral Stories",
        description: "Share moments that vanish after 24 hours. No tracking, no permanent footprint, total control over your audience.",
        color: "from-pink-500 to-rose-500",
        index: 1
    },
    {
        title: "Private Posts",
        description: "Share your thoughts with confidence. Control exactly who sees your posts with granular privacy settings.",
        color: "from-orange-500 to-amber-500",
        index: 2
    },
    {
        title: "Reels",
        description: "A clean, algorithm-free feed. See what your friends are up to in chronological order, without the noise.",
        color: "from-blue-500 to-cyan-500",
        index: 3
    }
];

export function Screenshots() {
    return (
        <section className="py-16 md:py-24 bg-black relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-indigo-600/10 rounded-full blur-[80px] md:blur-[128px]" />
                <div className="absolute top-[40%] right-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-600/10 rounded-full blur-[80px] md:blur-[128px]" />
                <div className="absolute bottom-[10%] left-[30%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-pink-600/10 rounded-full blur-[80px] md:blur-[128px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="space-y-20 md:space-y-32">
                    {features.map((feature, i) => (
                        <FeatureRow key={i} feature={feature} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FeatureRow({ feature, index }: { feature: any, index: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <div ref={ref} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 md:gap-16`}>

            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 space-y-4 md:space-y-6 text-center lg:text-left"
            >
                <div className={`inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br ${feature.color} mb-2 md:mb-4 shadow-lg shadow-indigo-500/20`}>
                    <Shield className="text-white w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-white max-w-lg mx-auto lg:mx-0">
                    {feature.title}
                </h3>
                <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-lg mx-auto lg:mx-0">
                    {feature.description}
                </p>
            </motion.div>

            {/* Phone Visual */}
            <motion.div
                style={{ y }}
                className="flex-1 w-full flex justify-center"
            >
                <PhoneMockup activeFeature={feature.index} color={feature.color} title={feature.title} />
            </motion.div>
        </div>
    )
}

function PhoneMockup({ activeFeature, color, title }: { activeFeature: number, color: string, title: string }) {
    return (
        <div className="relative p-4 md:p-6 rounded-[2.5rem] md:rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-sm shadow-2xl max-w-[280px] md:max-w-[350px] w-full">
            <div className="relative aspect-[9/19] bg-[#0c0c0c] rounded-[28px] md:rounded-[36px] shadow-2xl border-[6px] border-[#1f1f1f] overflow-hidden ring-1 ring-black">

                {/* Dynamic Screen Content */}
                <div className="h-full w-full bg-[#0c0c0c] relative flex flex-col pt-8">

                    {/* Status Bar */}
                    <div className="px-6 flex justify-between items-center text-[10px] text-white/60 mb-4 select-none">
                        <span>9:41</span>
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 bg-white/20 rounded-full" />
                            <div className="w-3 h-3 bg-white/20 rounded-full" />
                            <div className="w-3 h-3 bg-white rounded-full" />
                        </div>
                    </div>

                    {/* App Header */}
                    <div className="px-4 pb-4 border-b border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white text-xs font-bold`}>
                                <Shield size={14} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white">{title}</h4>
                                <p className="text-[10px] text-white/40">Encrypted • Secure</p>
                            </div>
                        </div>
                        <div className="flex gap-4 text-white/40">
                            <Video size={16} />
                            <Phone size={16} />
                            <MoreVertical size={16} />
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 overflow-hidden relative">
                        <ActiveScreen featureIndex={activeFeature} />
                    </div>

                    {/* NavBar */}
                    <div className="px-6 py-4 bg-[#0c0c0c] border-t border-white/5 flex justify-between text-white/40">
                        <div className={`${activeFeature === 0 ? 'text-white' : ''}`}><Send size={20} /></div>
                        <div className={`${activeFeature === 1 ? 'text-white' : ''}`}><User size={20} /></div>
                        <div className={`${activeFeature === 2 ? 'text-white' : ''}`}><Play size={20} /></div>
                        <div className={`${activeFeature === 3 ? 'text-white' : ''}`}><ImageIcon size={20} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ActiveScreen({ featureIndex }: { featureIndex: number }) {
    if (featureIndex === 0) { // Chats
        return (
            <div className="p-4 space-y-4 h-full">
                <Message bubble="left" text="Did you check out the new protocols?" time="9:41 AM" />
                <Message bubble="right" text="Yeah, the AES encryption looks solid." time="9:42 AM" />
                <Message bubble="left" text="Exactly. No metadata leakage either." time="9:44 AM" />
                <div className="flex justify-center py-2">
                    <span className="text-[10px] text-white/20 bg-white/5 px-2 py-1 rounded-full flex items-center gap-1 border border-white/5">
                        <Lock size={8} /> End-to-end encrypted
                    </span>
                </div>
                <Message bubble="right" text="This is how privacy should be." time="9:45 AM" />
                <div className="mt-auto pt-4">
                    <div className="h-10 bg-[#2a2a2a] rounded-full flex items-center px-4 justify-between">
                        <span className="text-white/30 text-xs">Message...</span>
                        <Send size={14} className="text-white/30" />
                    </div>
                </div>
            </div>
        )
    }
    if (featureIndex === 1) { // Stories
        return (
            <div className="h-full bg-zinc-900 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20" />
                <div className="absolute top-2 left-2 right-2 flex gap-1">
                    <div className="h-0.5 flex-1 bg-white rounded-full" />
                    <div className="h-0.5 flex-1 bg-white/30 rounded-full" />
                </div>
                <div className="absolute top-6 left-4 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 p-0.5">
                        <div className="w-full h-full bg-black rounded-full p-0.5">
                            <div className="w-full h-full bg-zinc-400 rounded-full" />
                        </div>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-white">sarah.j <span className="text-white/50 font-normal">3h</span></p>
                    </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <p className="text-2xl font-bold text-white/20 rotate-[-12deg]">Ephemeral</p>
                </div>
            </div>
        )
    }
    if (featureIndex === 2) { // Posts
        return (
            <div className="p-4 space-y-4 h-full overflow-y-auto no-scrollbar">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-zinc-800 rounded-full" />
                        <div>
                            <p className="text-sm font-bold text-white">alex.design</p>
                            <p className="text-[10px] text-white/40">New Post • Encrypted</p>
                        </div>
                    </div>
                    <div className="aspect-[4/5] bg-zinc-800 rounded-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-amber-500/10" />
                        <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/60 backdrop-blur-md rounded-xl border border-white/5">
                            <div className="flex justify-between items-center text-white/80">
                                <span className="text-[10px]">Filter: Noir</span>
                                <Lock size={10} />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 text-white">
                        <Heart size={22} className="text-red-500" fill="currentColor" />
                        <div className="rotate-[-90deg]"><Send size={22} /></div>
                        <Bookmark size={22} className="ml-auto text-white/40" />
                    </div>
                </div>
            </div>
        )
    }
    // Reels
    return (
        <div className="p-4 space-y-6 h-full overflow-y-auto no-scrollbar">
            <div className="space-y-3">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-zinc-800 rounded-full" />
                    <p className="text-xs font-bold text-white">mike.tor</p>
                </div>
                <div className="aspect-square bg-zinc-800 rounded-xl relative" />
                <div className="flex gap-3 text-white/80">
                    <Heart size={16} />
                    <Send size={16} />
                </div>
            </div>
            <div className="space-y-3">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-zinc-800 rounded-full" />
                    <p className="text-xs font-bold text-white">security_lab</p>
                </div>
                <div className="aspect-video bg-zinc-800 rounded-xl relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Play fill="white" className="text-white opacity-50" />
                    </div>
                </div>
            </div>
        </div>
    )
}

function Message({ bubble, text, time, name }: { bubble: 'left' | 'right', text: string, time: string, name?: string }) {
    return (
        <div className={`flex flex-col ${bubble === 'right' ? 'items-end' : 'items-start'} max-w-[85%]`}>
            {name && <span className={`text-[10px] font-bold mb-1 ml-1 text-white`}>{name}</span>}
            <div className={`p-3 rounded-2xl text-xs leading-relaxed ${bubble === 'right'
                ? 'bg-indigo-600 text-white rounded-tr-sm'
                : 'bg-[#2a2a2a] text-white/90 rounded-tl-sm'
                }`}>
                {text}
            </div>
            <span className="text-[9px] text-white/30 mt-1 mx-1">{time}</span>
        </div>
    )
}
