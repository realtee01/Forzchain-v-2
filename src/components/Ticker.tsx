import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';

const INITIAL_PRICES = [
  { name: 'BTC', price: '64,231.50', change: '+2.41' },
  { name: 'ETH', price: '3,451.20', change: '+1.84' },
  { name: 'SOL', price: '142.75', change: '-0.32' },
  { name: 'BNB', price: '581.40', change: '+0.15' },
  { name: 'DOGE', price: '0.15', change: '+5.42' },
  { name: 'XRP', price: '0.58', change: '-1.21' },
  { name: 'ADA', price: '0.45', change: '+0.88' },
  { name: 'AVAX', price: '45.20', change: '-2.14' }
];

const Ticker = () => {
  const [prices, setPrices] = useState(INITIAL_PRICES);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,SOL,BNB,DOGE,XRP,ADA,AVAX&tsyms=USD`);
        const data = await res.json();
        if (data && data.RAW) {
          const priceArray = Object.keys(data.RAW).map(key => {
            const rawPrice = data.RAW[key].USD.PRICE;
            const changeStr = data.RAW[key].USD.CHANGEPCT24HOUR.toFixed(2);
            return {
              name: key,
              price: rawPrice < 1 ? rawPrice.toFixed(4) : rawPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
              change: parseFloat(changeStr) > 0 ? `+${changeStr}` : changeStr
            };
          });
          setPrices(priceArray);
        }
      } catch (err) { 
        console.error("Failed to fetch prices:", err); 
      }
    };
    
    // Slight delay to allow initial render, then fetch real data
    const timeout = setTimeout(fetchPrices, 1000);
    const interval = setInterval(fetchPrices, 30000);
    
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  // Duplicate array significantly more to ensure seamless looping without visual gap
  const duplicatedPrices = [...prices, ...prices, ...prices, ...prices, ...prices, ...prices];

  return (
    <div className="fixed top-0 left-0 right-0 h-10 bg-slate-50/80 dark:bg-[#020202]/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-white/[0.05] overflow-hidden z-50 flex items-center shadow-sm">
      {/* Premium Edge Gradients */}
      <div className="absolute top-0 left-0 bottom-0 w-8 md:w-24 bg-gradient-to-r from-slate-50 dark:from-[#020202] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-8 md:w-24 bg-gradient-to-l from-slate-50 dark:from-[#020202] to-transparent z-10 pointer-events-none" />
      
      {/* Left indicator module */}
      <div className="absolute left-0 top-0 bottom-0 z-20 flex items-center px-3 md:px-4 bg-slate-50 dark:bg-[#020202] border-r border-slate-200/50 dark:border-white/[0.05]">
        <div className="flex items-center gap-2">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </div>
          <span className="hidden md:block text-[10px] font-bold tracking-widest text-slate-500 dark:text-white/40 uppercase">Live Markets</span>
          <Activity className="md:hidden w-3 h-3 text-emerald-500" />
        </div>
      </div>

      <motion.div 
        className="flex w-max pl-24 md:pl-36"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
      >
        {duplicatedPrices.map((coin, i) => {
          const isPositive = parseFloat(coin.change) >= 0;
          return (
            <div key={i} className="flex items-center gap-3 px-6 md:px-8 relative group">
              {/* Separator dot */}
              <div className="absolute left-0 w-[3px] h-[3px] rounded-full bg-slate-300 dark:bg-white/10" />
              
              <span className="font-bold text-xs tracking-wider text-slate-800 dark:text-white/90 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors cursor-default">
                {coin.name}
              </span>
              <span className="text-xs text-slate-600 dark:text-white/60 font-mono tracking-tight cursor-default">
                ${coin.price}
              </span>
              <div className={`flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded-md cursor-default transition-colors ${
                isPositive 
                  ? 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-500/20' 
                  : 'bg-rose-100 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 group-hover:bg-rose-200 dark:group-hover:bg-rose-500/20'
              }`}>
                {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                <span>{Math.abs(parseFloat(coin.change))}%</span>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Ticker;
