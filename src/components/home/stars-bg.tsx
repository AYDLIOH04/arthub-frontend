"use client";

import { motion } from "framer-motion";

export default function StarsBackground() {
  return (
    <div className="w-full absolute top-0 overflow-hidden z-0 ">
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
        className="h-full w-full absolute top-0"
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
        className="h-full w-full top-0"
      />
    </div>
  );
}
