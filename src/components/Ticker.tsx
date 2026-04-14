import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

const Ticker = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,SOL,BNB,DOGE,XRP,ADA,AVAX&tsyms=USD`);
        const data = await res.json();
        if (data && data.RAW) {
          const priceArray = Object.keys(data.RAW).map(key => ({
            name: key,
            price: data.RAW[key].USD.PRICE.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
            change: data.RAW[key].USD.CHANGEPCT24HOUR.toFixed(2)
          }));
          setPrices(priceArray);
        }
      } catch (err) { 
        console.error("Failed to fetch prices:", err); 
      }
    };
    fetchPrices();
    const interval = setInterval(fetchPrices, 30000);
    return () => clearInterval(interval);
  }, []);

  if (prices.length === 0) return null;

  // Duplicate array to create seamless loop
  const duplicatedPrices = [...prices, ...prices, ...prices, ...prices];

  return (
    <div className="fixed top-0 left-0 right-0 h-10 bg-white/90 dark:bg-[#050505]/90 backdrop-blur-xl border-b border-black/5 dark:border-white/10 overflow-hidden z-50 flex items-center">
      <motion.div 
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
      >
        {duplicatedPrices.map((coin, i) => {
          const isPositive = parseFloat(coin.change) >= 0;
          return (
            <div key={i} className="flex items-center gap-3 px-8 border-r border-black/5 dark:border-white/5">
              <span className="font-bold text-xs tracking-wider text-slate-800 dark:text-white/90">{coin.name}</span>
              <span className="text-xs text-slate-500 dark:text-white/60 font-mono">${coin.price}</span>
              <div className={`flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded ${isPositive ? 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'bg-rose-100 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400'}`}>
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
