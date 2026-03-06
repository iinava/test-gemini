import { Sparkles, Twitter, Github, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <div className="pt-24 pb-12 px-6">
      <div className="px-6">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-12 mb-24">
          <div className="col-span-full md:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Sparkles className="text-black w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight">AI Autos</span>
            </div>
            <p className="text-white/40 max-w-xs mb-8 leading-relaxed">
              Empowering creators with the world's most advanced AI website builder. Build, launch, and scale with ease.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white/60 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white/60 hover:text-white">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white/60 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white/60 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="font-semibold mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Showcase</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="font-semibold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/20 uppercase tracking-widest font-bold">
          <p>© 2026 AI Autos Inc. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">Status</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </div>
  );
}
