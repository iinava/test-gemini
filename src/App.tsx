/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";
import { GlassButton } from "@/components/ui/glass-button";
import { ShaderAnimation } from "@/src/components/ShaderAnimation";
import { Features } from "@/components/ui/features-8";
import { TestimonialSlider } from "@/components/ui/testimonial-slider-1";
import { Pricing } from "@/components/ui/pricing";
import { FAQ } from "@/components/ui/faq";
import { FinalCTA } from "@/components/ui/final-cta";
import { Footer } from "@/components/ui/footer";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const reviews = [
  {
    id: 1,
    name: "Ashley Right",
    affiliation: "Pinterest",
    quote: "Professionals in their craft! All products were super amazing with strong attention to details, comps and overall vibe.",
    imageSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop&q=80",
    thumbnailSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=120&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Jacob Jose",
    affiliation: "New York Times",
    quote: "Unlimited, instant access to hundreds of premium quality resources created by designers for designers.",
    imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&q=80",
    thumbnailSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=120&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Elara Sands",
    affiliation: "Behance",
    quote: "The attention to detail is immaculate. Every component feels polished and ready for production.",
    imageSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop&q=80",
    thumbnailSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=120&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Marcus Cole",
    affiliation: "Dribbble",
    quote: "A true time-saver. I can focus on my core logic instead of pixel-pushing. Highly recommended.",
    imageSrc: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=600&fit=crop&q=80",
    thumbnailSrc: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=120&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Serena V.",
    affiliation: "Figma",
    quote: "This is the design system I've been waiting for. It's flexible, accessible, and beautiful.",
    imageSrc: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop&q=80",
    thumbnailSrc: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=120&fit=crop&q=80",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 w-[95%] max-w-5xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
              <Sparkles className="text-black w-4 h-4" />
            </div>
            <span className="font-bold text-lg tracking-tight">AI Autos</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-xs font-medium text-white/60">
            <a href="#" className="hover:text-white transition-colors">Platform</a>
            <a href="#" className="hover:text-white transition-colors">Showcase</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">Enterprise</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-xs font-medium text-white/60 hover:text-white transition-colors">Sign in</button>
            <GlassButton size="sm">
              Get Started
            </GlassButton>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="relative pt-32 pb-20 px-6 flex flex-col items-center justify-center min-h-screen text-center overflow-hidden">
          <ShaderAnimation />
          {/* Content Positioning inspired by Better Stack */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 flex flex-col items-center max-w-7xl mx-auto px-6"
          >
            <div className="flex flex-col items-center max-w-4xl">
            {/* Brand/Logo in center above headline */}
            <div className="flex items-center gap-2 mb-8 opacity-80">
              <Sparkles className="w-6 h-6" />
              <span className="text-lg font-semibold tracking-wide uppercase">AI Autos</span>
            </div>

            {/* ADHD-friendly Headline */}
            <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Websites made by <br />
              <span className="text-white/40 italic">smart robots.</span>
            </h1>

            {/* Simple Description */}
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed">
              No more boring work. Just click and go!
            </p>

            {/* CTA Area */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <GlassButton size="lg" contentClassName="flex items-center gap-2">
                <span>See how it works</span>
                <ArrowRight className="w-5 h-5" />
              </GlassButton>
            </div>

            <p className="mt-8 text-sm text-white/40">
              Trusted by 10,000+ creators worldwide
            </p>
            </div>
          </motion.div>

          {/* Logo Cloud / Social Proof at bottom */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="relative z-10 mt-24 w-full max-w-7xl px-6"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-8">Trusted by the world's best teams</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-xl font-black tracking-tighter">TECHCORP</span>
              <span className="text-xl font-black tracking-tighter italic underline decoration-indigo-500">NEXUS</span>
              <span className="text-xl font-black tracking-tighter">QUANTUM</span>
              <span className="text-xl font-black tracking-tighter uppercase border-b-2 border-white">Vortex</span>
              <span className="text-xl font-black tracking-tighter">ORBITAL</span>
              <span className="text-xl font-black tracking-tighter line-through decoration-indigo-500">LEGACY</span>
            </div>
          </motion.div>

          {/* Bottom Fade Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent z-[5] pointer-events-none" />
        </main>

        <SectionWrapper>
          <Features />
        </SectionWrapper>
        
        <SectionWrapper>
          <TestimonialSlider reviews={reviews} />
        </SectionWrapper>

        <SectionWrapper>
          <Pricing />
        </SectionWrapper>

        <SectionWrapper>
          <FAQ />
        </SectionWrapper>

        <SectionWrapper>
          <FinalCTA />
        </SectionWrapper>

        <SectionWrapper showBottomBorder={true}>
          <Footer />
        </SectionWrapper>
    </div>
  );
}
