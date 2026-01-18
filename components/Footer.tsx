import { Github, Instagram, Send, ExternalLink, Shield, CheckCircle } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-black relative overflow-hidden border-t border-white/5">
            {/* CTA Section */}
            <div className="container mx-auto px-4 py-24 border-b border-white/10 relative">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[128px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                <div className="text-center max-w-4xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium mb-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        Privacy First, Always
                    </div>

                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                        Take Back Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Privacy</span>
                    </h2>

                    <p className="text-xl text-white/40 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Experience true digital freedom with conversations that remain private—even from us.
                        <span className="text-white/80"> Not even governments or developers can access your messages, even if they wanted to.</span>
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium text-white/30">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>TOR Network Integrated</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Open Source</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Independently Audited</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Links Section */}
            <div className="container mx-auto px-4 py-20">
                <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-24">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <Shield className="w-8 h-8 text-indigo-500" />
                            <span className="text-2xl font-bold text-white">goodfellas</span>
                        </div>
                        <p className="text-white/40 max-w-sm mb-8 leading-relaxed">
                            The world's most secure messaging and social platform.
                            Engineered for those who value privacy above all else.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://instagram.com/morningstar0213" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://t.me/morningstar_0213" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 transition-all">
                                <Send className="w-5 h-5" />
                            </a>
                            <a href="https://github.com/morningstar-0213" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 transition-all">
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Product</h4>
                        <ul className="space-y-4 text-sm text-white/40">
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Security</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Download</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Whitepaper</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Resources</h4>
                        <ul className="space-y-4 text-sm text-white/40">
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Documentation</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">API Reference</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Audit Reports</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Help Center</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-white/40">
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>
                </div>

                {/* Developer Card */}
                <div className="mt-20 p-8 rounded-3xl bg-[#0F0F0F] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
                    {/* Gradient Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 text-center md:text-left">
                        <h4 className="text-xl font-bold text-white mb-2">Developed by Vishesh</h4>
                        <p className="text-white/40">Passionate about privacy, security, and innovation.</p>
                    </div>

                    <a href="https://morningstar-0213.github.io/portfolio/" target="_blank" rel="noopener noreferrer" className="relative z-10 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors inline-flex items-center gap-2 shadow-lg shadow-indigo-500/20">
                        Visit Portfolio <ExternalLink className="w-4 h-4" />
                    </a>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/40">
                    <p>© 2026 Vishesh. All rights reserved. Built for privacy, not profit.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
