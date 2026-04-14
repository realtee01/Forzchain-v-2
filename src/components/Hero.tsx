import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Coins } from 'lucide-react';

const RollingStat = ({ value, label, delay = 0, width = "w-32" }: { value: string, label: string, delay?: number, width?: string }) => {
  // Generate random-looking premium crypto stats for the blur effect
  const items = [
    "0.00", "84M", "3.2K", "99%", "12B", "7.4K", "45M", "66%", "2.1B", "50M", 
    "88%", "34K", "9.9B", "11M", "77%", "4.2K", "68M", "22%", "5.5B", "89M",
    "33%", "91K", "1.8B", "75%", "44M", "6.7K", "29%", "51M", "8.4B", "39%",
    value
  ];
  
  return (
    <motion.div 
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5, delay: delay, ease: "easeOut" }}
      className="flex flex-col"
    >
      <div className={`${width} h-12 overflow-hidden relative [mask-image:linear-gradient(to_right,black_60%,transparent)]`}>
        <motion.div
          initial={{ x: "20%" }}
          animate={{ x: `-${(items.length - 1) * 100}%` }}
          transition={{ duration: 3, delay, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-row h-full"
        >
          {items.map((item, i) => (
            <span 
              key={i} 
              className={`w-full flex-shrink-0 h-12 flex items-center justify-start text-3xl md:text-4xl font-bold tracking-tight ${
                i === items.length - 1 
                  ? 'text-slate-900 dark:text-white' 
                  : 'text-slate-400 dark:text-white/30 blur-[2px] italic'
              }`}
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
      <p className="text-sm text-slate-500 dark:text-white/50 mt-1 font-medium tracking-wide">{label}</p>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-40 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 w-fit backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-medium text-slate-700 dark:text-white/80 tracking-wide uppercase">Forzchain V2 is Live</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 dark:text-white leading-[1.1]">
            The Future is <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400">
              Forzchain
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-white/60 max-w-xl leading-relaxed">
            The ultimate crypto faucet and social hub. Secure your assets and earn rewards in a beautiful, decentralized world.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button className="group relative px-8 py-4 rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-black font-bold text-lg transition-all hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 dark:via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="flex items-center gap-2">
                Start Earning <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-8 py-4 rounded-2xl bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white font-semibold text-lg border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors backdrop-blur-md">
              Read Whitepaper
            </button>
          </div>
          
          <div className="flex items-center gap-8 pt-8 border-t border-slate-200 dark:border-white/10 mt-4">
            <RollingStat value="2M+" label="Active Users" delay={0} width="w-24" />
            <RollingStat value="$50M+" label="Rewards Paid" delay={0.2} width="w-36" />
            <RollingStat value="99.9%" label="Uptime" delay={0.4} width="w-32" />
          </div>
        </motion.div>

        {/* 3D Floating Elements Showcase */}
        <div className="relative h-[450px] sm:h-[500px] lg:h-[600px] w-full perspective-1000 mt-8 lg:mt-0">
          <div className="absolute inset-0 flex items-center justify-center transform-style-3d scale-[0.7] sm:scale-90 lg:scale-100">
            
            {/* Floating Crypto Coins */}
            <motion.div
              animate={{ y: [-20, 20, -20], rotateZ: [-15, 15, -15], rotateY: [0, 180, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute top-24 right-12 w-14 h-14 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center backdrop-blur-md z-0 shadow-[0_0_15px_rgba(249,115,22,0.2)]"
            >
              <span className="text-orange-400 text-2xl font-bold">₿</span>
            </motion.div>

            <motion.div
              animate={{ y: [20, -20, 20], rotateZ: [15, -15, 15], rotateY: [360, 180, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-32 left-4 w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center backdrop-blur-md z-0 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            >
              <span className="text-blue-400 text-xl font-bold">Ξ</span>
            </motion.div>

            <motion.div
              animate={{ y: [-15, 15, -15], rotateZ: [-10, 10, -10] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/3 -left-8 w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center backdrop-blur-md z-0 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
            >
              <span className="text-purple-400 text-lg font-bold">◎</span>
            </motion.div>

            {/* Main Center Card */}
            <motion.div 
              animate={{ y: [-8, 8, -8], rotateX: [4, -4, 4], rotateY: [-4, 4, -4] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-80 h-96 rounded-3xl bg-gradient-to-b from-white to-slate-50 dark:from-white/10 dark:to-white/5 border border-slate-200 dark:border-white/20 backdrop-blur-xl p-8 shadow-[0_0_40px_rgba(99,102,241,0.1)] dark:shadow-[0_0_40px_rgba(99,102,241,0.2)] flex flex-col justify-between z-20"
            >
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center border border-indigo-200 dark:border-indigo-500/30">
                  <Shield className="text-indigo-500 dark:text-indigo-400 w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-200 dark:border-emerald-500/20">Secure</span>
              </div>
              <div>
                <p className="text-slate-500 dark:text-white/50 text-sm mb-1">Total Balance</p>
                <p className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">$124,592.00</p>
              </div>
              <div className="w-full h-24 rounded-xl bg-gradient-to-t from-indigo-500/20 to-transparent border-b-2 border-indigo-500 relative overflow-hidden">
                <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M0,100 L0,50 Q25,20 50,60 T100,30 L100,100 Z" fill="rgba(99,102,241,0.2)" />
                  <path d="M0,50 Q25,20 50,60 T100,30" fill="none" stroke="rgba(99,102,241,0.8)" strokeWidth="2" />
                </svg>
              </div>
            </motion.div>

            {/* Floating Card 1 */}
            <motion.div 
              animate={{ y: [12, -12, 12] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -left-12 top-20 w-48 h-48 rounded-2xl bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-lg p-5 shadow-2xl z-30"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center border border-purple-200 dark:border-purple-500/30 mb-4">
                <Zap className="text-purple-500 dark:text-purple-400 w-5 h-5" />
              </div>
              <p className="text-slate-900 dark:text-white font-semibold mb-1">Instant Claim</p>
              <p className="text-xs text-slate-500 dark:text-white/50">Direct blockchain throughput for rewards.</p>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div 
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -right-8 bottom-20 w-56 h-40 rounded-2xl bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-lg p-5 shadow-2xl z-30"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-500/20 flex items-center justify-center border border-cyan-200 dark:border-cyan-500/30 mb-4">
                <Coins className="text-cyan-500 dark:text-cyan-400 w-5 h-5" />
              </div>
              <p className="text-slate-900 dark:text-white font-semibold mb-1">Passive Rewards</p>
              <p className="text-xs text-slate-500 dark:text-white/50">Hold $FORZ to earn daily.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
