import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hexagon, Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  onLoginClick?: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick, isDarkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [launchMessage, setLaunchMessage] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLaunchClick = () => {
    setLaunchMessage(true);
    setTimeout(() => setLaunchMessage(false), 3000);
  };

  return (
    <header 
      className={`fixed top-10 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/80 dark:bg-black/50 backdrop-blur-xl border-b border-black/5 dark:border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-[0_0_20px_rgba(99,102,241,0.4)]">
            <Hexagon className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">FORZCHAIN</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {['Features', 'Ecosystem', 'News', 'Community'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-white/60 dark:hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-slate-600 hover:bg-slate-200 dark:text-white/80 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button onClick={onLoginClick} className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-white/80 dark:hover:text-white transition-colors px-4 py-2">
            Log In
          </button>
          <div className="relative flex flex-col items-center">
            <button onClick={handleLaunchClick} className="relative group px-6 py-2.5 rounded-full bg-slate-900 text-white dark:bg-white dark:text-black font-semibold text-sm transition-all hover:scale-105">
              <span className="relative z-10">Launch App</span>
              <div className="absolute inset-0 rounded-full bg-slate-900 dark:bg-white blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
            </button>
            <AnimatePresence>
              {launchMessage && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full mt-4 whitespace-nowrap pointer-events-none"
                >
                  <span className="italic text-sm text-indigo-600 dark:text-indigo-300 font-medium">App will be live soon...</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <button 
          className="md:hidden text-slate-600 dark:text-white/80"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white dark:bg-[#050505] border-b border-black/5 dark:border-white/10 p-6 flex flex-col gap-4 md:hidden"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-slate-500 dark:text-white/50">Theme</span>
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-white/80 transition-colors"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
          {['Features', 'Ecosystem', 'News', 'Community'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-lg font-medium text-slate-800 dark:text-white/80 hover:text-slate-900 dark:hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="h-px bg-black/5 dark:bg-white/10 my-2" />
          <button onClick={() => { onLoginClick?.(); setMobileMenuOpen(false); }} className="w-full py-3 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white font-medium border border-black/5 dark:border-white/10">
            Log In
          </button>
          <div className="relative w-full flex flex-col items-center">
            <button onClick={handleLaunchClick} className="w-full py-3 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-black font-bold">
              Launch App
            </button>
            <AnimatePresence>
              {launchMessage && (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute top-full mt-2 whitespace-nowrap pointer-events-none"
                >
                  <span className="italic text-sm text-indigo-600 dark:text-indigo-300 font-medium">App will be live soon...</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
