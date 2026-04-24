"use client";
import { motion } from "framer-motion";
import React from "react";
import { cn } from "../../lib/utils";

export const Circle = ({ className, children, idx, ...rest }: any) => {
  return (
    <motion.div
      {...rest}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: idx * 0.1, duration: 0.2 }}
      className={cn(
        "absolute inset-0 left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full",
        className
      )}
    />
  );
};

export const Radar = ({ className }: { className?: string }) => {
  const circles = new Array(8).fill(1);
  return (
    <div
      className={cn(
        "relative flex h-20 w-20 items-center justify-center rounded-full pointer-events-none",
        className
      )}
    >
      <style>{`
        @keyframes radar-spin {
          from { transform: rotate(20deg); }
          to   { transform: rotate(380deg); }
        }
        .animate-radar-spin {
          animation: radar-spin 10s linear infinite;
        }
      `}</style>
      {/* Rotating sweep line */}
      <div
        style={{ transformOrigin: "right center" }}
        className="animate-radar-spin absolute right-1/2 top-1/2 z-40 flex h-[5px] w-[400px] items-end justify-center overflow-hidden bg-transparent"
      >
        <div className="relative z-40 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 dark:via-cyan-400 to-transparent shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
      </div>
      {/* Concentric circles */}
      {circles.map((_, idx) => (
        <Circle
          className="border-slate-300 dark:border-white"
          style={{
            height: `${(idx + 1) * 5}rem`,
            width: `${(idx + 1) * 5}rem`,
            opacity: 1 - (idx + 1) * 0.1,
          }}
          key={`circle-${idx}`}
          idx={idx}
        />
      ))}
    </div>
  );
};

export const IconContainer = ({
  icon,
  text,
  delay,
}: {
  icon?: React.ReactNode;
  text?: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, delay: delay ?? 0 }}
      className="relative z-50 flex flex-col items-center justify-center space-y-3 cursor-pointer group"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a] backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:shadow-[0_0_15px_rgba(255,255,255,0.02)] transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-500/50">
        {icon}
      </div>
      <div className="hidden rounded-lg px-3 py-1.5 md:block bg-white dark:bg-[#0a0a0a] backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-sm transition-colors duration-300 group-hover:border-indigo-500/30">
        <div className="text-center text-xs font-bold text-slate-700 dark:text-white/80">
          {text}
        </div>
      </div>
    </motion.div>
  );
};
