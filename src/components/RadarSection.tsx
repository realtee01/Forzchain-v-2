import React from "react";
import { Radar, IconContainer } from "./ui/radar";
import { Bitcoin, Network, Wallet, ArrowRightLeft, ShieldCheck, Activity, BarChart3, Fingerprint } from "lucide-react";

export default function RadarSection() {
  return (
    <section className="relative py-24 flex items-center justify-center flex-col z-10 w-full overflow-hidden">
      
      {/* Premium background radial highlights for radar section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-50">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
          Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500 dark:from-cyan-400 dark:to-indigo-400">Node Surveillance</span>
        </h2>
        <p className="text-slate-600 dark:text-white/60 max-w-2xl mx-auto">
          Monitor your cross-chain nodes, detect smart contract health, and trace on-chain liquidity routing across the decentralized Forzchain graph in real-time.
        </p>
      </div>

      <div className="relative flex h-96 w-full max-w-3xl flex-col items-center justify-center space-y-4 px-4 overflow-hidden">
        
        {/* Row 1 */}
        <div className="mx-auto w-full max-w-3xl z-50">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
            <IconContainer
              text="On-chain Nodes"
              delay={0.2}
              icon={<Network className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />}
            />
            <IconContainer
              delay={0.4}
              text="Token Liquidity"
              icon={<Bitcoin className="h-7 w-7 text-orange-500 dark:text-orange-400" />}
            />
            <IconContainer
              text="DApp Integrations"
              delay={0.3}
              icon={<BarChart3 className="h-6 w-6 text-emerald-500 dark:text-emerald-400" />}
            />
          </div>
        </div>
        
        {/* Row 2 */}
        <div className="mx-auto w-full max-w-md mt-6 md:mt-0 z-50">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
            <IconContainer
              text="Zero-Knowledge Proofs"
              delay={0.5}
              icon={<ShieldCheck className="h-6 w-6 text-blue-500 dark:text-blue-400" />}
            />
            <IconContainer
              text="Live Orderbooks"
              delay={0.8}
              icon={<Activity className="h-6 w-6 text-rose-500 dark:text-rose-400" />}
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="mx-auto w-full max-w-3xl mt-6 md:mt-0 z-50">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
            <IconContainer
              delay={0.6}
              text="Cross-Chain Bridges"
              icon={<ArrowRightLeft className="h-6 w-6 text-purple-500 dark:text-purple-400" />}
            />
            <IconContainer
              delay={0.7}
              text="DeFi Pulse"
              icon={<Fingerprint className="h-6 w-6 text-cyan-500 dark:text-cyan-400" />}
            />
          </div>
        </div>

        <Radar className="absolute -bottom-12" />
        <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-300 dark:via-white/20 to-transparent" />
      </div>
    </section>
  );
}
