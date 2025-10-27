import HeroSection from "./components/HeroSection";
import FeaturesProcess from "./components/FeaturesProcess";
import DemoUseCases from "./components/DemoUseCases";
import SocialProof from "./components/SocialProof";

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0A0F16]/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-white">
        <a href="#" className="inline-flex items-center gap-2 text-lg font-extrabold">
          <span className="h-6 w-6 rounded-lg bg-[#25D366]" /> WapBot
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#demo" className="hover:text-white">Demo</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
          <a
            href="#pricing"
            className="rounded-xl bg-[#25D366] px-4 py-2 font-semibold text-[#0A0F16] shadow shadow-emerald-500/20 hover:brightness-110"
          >
            Start Free Trial
          </a>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#0A0F16]">
      <Navbar />
      <HeroSection />
      <div id="features">
        <FeaturesProcess />
      </div>
      <DemoUseCases />
      <SocialProof />
    </div>
  );
}
