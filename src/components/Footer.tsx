import React from 'react';
import { Hexagon, Twitter, Github, Disc as Discord } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-slate-200 dark:border-white/10 bg-white/80 dark:bg-black/50 backdrop-blur-lg pt-20 pb-10 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
                <Hexagon className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">FORZCHAIN</span>
            </div>
            <p className="text-slate-500 dark:text-white/50 max-w-sm leading-relaxed mb-8">
              The ultimate crypto faucet and social hub. Secure your assets and earn rewards in a beautiful, decentralized world.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-all">
                <Discord className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-all">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Platform</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 dark:text-white/50 hover:text-slate-900 dark:hover:text-white transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-slate-500 dark:text-white/50 hover:text-slate-900 dark:hover:text-white transition-colors text-sm">Ecosystem</a></li>
              <li><a href="#" className="text-slate-500 dark:text-white/50 hover:text-slate-900 dark:hover:text-white transition-colors text-sm">Rewards</a></li>
              <li><a href="#" className="text-slate-500 dark:text-white/50 hover:text-slate-900 dark:hover:text-white transition-colors text-sm">Whitepaper</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 dark:text-white/50 hover:text-slate-900 dark:hover:text-white transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-slate-500 dark:text-white/50 hover:text-slate-900 dark:hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-500 dark:text-white/50 hover:text-slate-900 dark:hover:text-white transition-colors text-sm">Cookie Policy</a></li>
              <li><a href="#" className="text-slate-500 dark:text-white/50 hover:text-slate-900 dark:hover:text-white transition-colors text-sm">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 dark:text-white/40 text-sm">
            © {new Date().getFullYear()} Forzchain. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-slate-400 dark:text-white/40 text-sm">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
