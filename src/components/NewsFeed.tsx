import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Heart, Share2 } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    source: "@Forzchain_Official",
    title: "Forzchain V2 is officially live! Experience lightning-fast claims and our new referral engine. 🚀 #Crypto #Web3",
    time: "2h ago",
    likes: 1240,
    comments: 342
  },
  {
    id: 2,
    source: "@CryptoWhale",
    title: "Just tested the new $FORZ passive rewards system. The APY is looking incredibly sustainable. Bullish! 🐋",
    time: "5h ago",
    likes: 892,
    comments: 156
  },
  {
    id: 3,
    source: "@DeFi_Daily",
    title: "Top 5 Faucets of 2026: Forzchain takes the #1 spot with its innovative social hub integration.",
    time: "12h ago",
    likes: 4500,
    comments: 890
  }
];

const NewsFeed = () => {
  return (
    <section id="news" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Live Social Feed
          </h2>
          <div className="flex gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {newsItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-6 hover:bg-slate-50 dark:hover:bg-white/[0.07] transition-colors flex flex-col justify-between h-full shadow-sm dark:shadow-none"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">{item.source}</span>
                  <span className="text-xs text-slate-400 dark:text-white/40">{item.time}</span>
                </div>
                <p className="text-slate-700 dark:text-white/80 leading-relaxed mb-6">
                  {item.title}
                </p>
              </div>
              
              <div className="flex items-center gap-6 pt-4 border-t border-slate-100 dark:border-white/10">
                <button className="flex items-center gap-2 text-slate-500 dark:text-white/50 hover:text-rose-500 dark:hover:text-rose-400 transition-colors group">
                  <Heart className="w-4 h-4 group-hover:fill-rose-500 dark:group-hover:fill-rose-400" />
                  <span className="text-xs font-medium">{item.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-slate-500 dark:text-white/50 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-xs font-medium">{item.comments}</span>
                </button>
                <button className="flex items-center gap-2 text-slate-500 dark:text-white/50 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors ml-auto">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsFeed;
