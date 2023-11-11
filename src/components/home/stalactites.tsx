'use client'

import { motion } from "framer-motion";

export default function Stalactites() {
  return (
    <motion.div
      initial={{ y: -1000, scale: 1.5 }}
      animate={{ y: 0, scale: 1 }}
      transition={{ duration: 1.3, ease: "easeOut" }}
      className="absolute top-0 w-full overflow-hidden z-0"
    >
      <img src="/home/stalactites.png" alt="" className="w-full pointer-events-none select-none" />
    </motion.div>
  );
}
