import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={onClose} 
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-[50px]" />
            
            <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 dark:text-white/50 hover:text-slate-900 dark:hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
            
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Welcome Back</h2>
            <p className="text-slate-500 dark:text-white/50 text-sm mb-8">Enter your details to access your account.</p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-white/70 mb-1.5">Email Address</label>
                <input type="email" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 transition-colors" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-white/70 mb-1.5">Password</label>
                <input type="password" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 transition-colors" placeholder="••••••••" />
              </div>
              <button className="w-full py-3.5 mt-4 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-black font-bold hover:bg-slate-800 dark:hover:bg-white/90 transition-colors">
                Sign In
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
