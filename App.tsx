import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SecurityFeatures } from './components/SecurityFeatures';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { Screenshots } from './components/Screenshots';
import { Footer } from './components/Footer';
import { SocialShowcase } from './components/SocialShowcase';
import { MouseSpotlight } from './components/ui/MouseSpotlight';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden selection:bg-indigo-500/30">
      {/* Global Smooth Scroll & Selection Styles are in globals.css */}

      {/* Immersive Mouse Spotlight */}
      <MouseSpotlight />

      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 z-[1] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Global Animated Gradient Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <main className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <SocialShowcase />
        <Screenshots />
        <SecurityFeatures />
        <Footer />
      </main>
    </div>
  );
}