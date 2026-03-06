import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { GlassButton } from "@/components/ui/glass-button";

export function FinalCTA() {
  return (
    <div className="py-32 px-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-2xl border border-white/10 p-12 md:p-20 rounded-[40px] shadow-2xl max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-8 border border-white/10">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-xs font-bold uppercase tracking-widest">Ready to launch?</span>
          </div>
          
          <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
            Build your dream website <br />
            <span className="text-white/40 italic">in minutes, not months.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Join 10,000+ creators who are already using AI Autos to transform their online presence.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <GlassButton size="lg" className="w-full md:w-auto px-12 h-16 text-lg">
              Get Started Now
            </GlassButton>
            <button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors font-medium">
              <span>View live demo</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
