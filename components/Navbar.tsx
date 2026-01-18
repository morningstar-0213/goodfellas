import { motion } from 'motion/react';


export function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md"
        >
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-gradient-to-tr from-indigo-500 to-purple-500" />
                    <span className="font-bold text-xl tracking-tight">Goodfellas</span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <a href="#features" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Features</a>
                    <a href="#security" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Security</a>
                    <a href="#how-it-works" className="text-sm font-medium text-white/70 hover:text-white transition-colors">How It Works</a>
                    <a href="#screenshots" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Screenshots</a>
                    <a href="#socials" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Developer</a>
                </div>

                <div className="flex items-center gap-4">
                    <a href="#" className="inline-flex items-center justify-center h-10 px-4 py-2 bg-white text-black rounded-md font-medium hover:bg-white/90 transition-colors">
                        Download App
                    </a>
                </div>
            </div>
        </motion.nav >
    );
}
