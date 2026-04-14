import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Coins, Users } from 'lucide-react';

const features = [
  {
    title: "Instant Claims",
    desc: "Direct blockchain throughput for rewards. Claim your earnings instantly with zero delays and minimal gas fees.",
    icon: <Zap className="w-6 h-6 text-purple-500 dark:text-purple-400" />,
    color: "from-purple-500/10 dark:from-purple-500/20 to-transparent",
    border: "border-purple-200 dark:border-purple-500/20",
    colSpan: "md:col-span-2",
  },
  {
    title: "Security First",
    desc: "Military-grade encryption protocols protecting your assets 24/7.",
    icon: <ShieldCheck className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
    color: "from-blue-500/10 dark:from-blue-500/20 to-transparent",
    border: "border-blue-200 dark:border-blue-500/20",
    colSpan: "md:col-span-1",
  },
  {
    title: "Passive Rewards",
    desc: "Hold $FORZ tokens in your wallet to automatically earn daily yields.",
    icon: <Coins className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />,
    color: "from-cyan-500/10 dark:from-cyan-500/20 to-transparent",
    border: "border-cyan-200 dark:border-cyan-500/20",
    colSpan: "md:col-span-1",
  },
  {
    title: "Referral Engine",
    desc: "Invite friends and earn a 15% lifetime commission on all their faucet claims and trading fees.",
    icon: <Users className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />,
    color: "from-indigo-500/10 dark:from-indigo-500/20 to-transparent",
    border: "border-indigo-200 dark:border-indigo-500/20",
    colSpan: "md:col-span-2",
  }
];

const Features = () => {
  return (
    <section id="features" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 dark:from-purple-400 dark:to-cyan-400">Excellence</span>
          </h2>
          <p className="text-slate-600 dark:text-white/60 text-lg">
            Experience the next generation of decentralized finance with our cutting-edge infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative group overflow-hidden rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-sm p-8 shadow-sm dark:shadow-none ${feature.colSpan}`}
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className={`w-14 h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border ${feature.border} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  {feature.icon}
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-white/60 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
