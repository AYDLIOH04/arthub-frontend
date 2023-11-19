"use client";

import { motion } from "framer-motion";

const StarsBackground = () => {
  return (
    <div className="w-full absolute top-0 overflow-hidden z-0">
      <div className="sm:flex hidden">
        <motion.img
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1,
          }}
          src="/home/stars-1.png"
          alt="stars-1"
          className="h-full w-full absolute top-0 pointer-events-none select-none"
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1,
          }}
          src="/home/stars-2.png"
          alt="stars-2"
          className="h-full w-full top-0 pointer-events-none select-none"
        />
      </div>
      <div className="sm:hidden flex">
        <motion.img
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1,
          }}
          src="/home/mobile-stars-1.png"
          alt="stars-1"
          className="min-w-full absolute top-0 h-[3450px] pointer-events-none select-none"
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1,
          }}
          src="/home/mobile-stars-2.png"
          alt="stars-2"
          className="min-w-full top-0 h-[3450px] pointer-events-none select-none"
        />
      </div>
    </div>
  );
};

export default StarsBackground;
