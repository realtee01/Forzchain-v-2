import React from 'react';
import { motion } from 'framer-motion';

const ecosystems = [
  { name: 'Bitcoin', symbol: 'BTC', color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
  { name: 'Ethereum', symbol: 'ETH', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
  { name: 'Solana', symbol: 'SOL', color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
  { name: 'Binance', symbol: 'BNB', color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' },
  { name: 'Dogecoin', symbol: 'DOGE', color: 'text-yellow-500', bg: 'bg-yellow-600/10', border: 'border-yellow-600/20' },
];

const Ecosystems = () => {
  return (
    <section id="ecosystem" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              Supported Ecosystems
            </h2>
            <p className="text-slate-600 dark:text-white/60">Seamlessly interact with top-tier blockchain networks.</p>
          </div>
          <button className="text-sm font-semibold text-slate-700 dark:text-white/80 hover:text-slate-900 dark:hover:text-white px-6 py-3 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 transition-colors w-fit">
            View All Networks
          </button>
        </div>

        <div className="flex flex-wrap gap-4">
          {ecosystems.map((eco, idx) => (
            <motion.div
              key={eco.symbol}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`flex items-center gap-4 px-6 py-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 transition-all cursor-pointer group shadow-sm dark:shadow-none`}
            >
              <div className={`w-10 h-10 rounded-full ${eco.bg} ${eco.border} border flex items-center justify-center font-bold ${eco.color} group-hover:scale-110 transition-transform`}>
                {eco.symbol[0]}
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white">{eco.name}</p>
                <p className="text-xs text-slate-500 dark:text-white/50">{eco.symbol}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystems;
