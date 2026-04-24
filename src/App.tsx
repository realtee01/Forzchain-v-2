import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Features from './components/Features';
import Ecosystems from './components/Ecosystems';
import RadarSection from './components/RadarSection';
import NewsFeed from './components/NewsFeed';
import FooterMarquee from './components/FooterMarquee';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Initialize smooth scrolling
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white font-sans selection:bg-indigo-500/30 transition-colors duration-500">
      <Ticker />
      <Navbar 
        onLoginClick={() => setIsLoginOpen(true)} 
        isDarkMode={isDarkMode} 
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)} 
      />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      
      <main>
        <Hero />
        <Features />
        <Ecosystems />
        <RadarSection />
        <NewsFeed />
        <FooterMarquee />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
