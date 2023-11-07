"use client";

import { motion } from "framer-motion";

export function LeftStone() {
  return (
    <motion.div
      initial={{ x: -400, y: 0}}
      animate={{ x: 0, y: 200}}
      transition={{ duration: 1.3, ease: "easeOut" }}
      className="absolute left-0"
    >
      <img src="/home/left-stone.png" alt="left-stone" />
    </motion.div>
  );
}

export function RightStone() {
  return (
    <motion.div
      initial={{ x: 400, y: 0}}
      animate={{ x: 0, y: 200}}
      transition={{ duration: 1.3, ease: "easeOut" }}
      className="absolute right-0"
    >
      <img src="/home/right-stone.png" alt="right-stone" />
    </motion.div>
  );
}
