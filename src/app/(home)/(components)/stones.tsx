"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const LeftStone = () => {
  return (
    <motion.div
      initial={{ x: -400, y: 80 }}
      animate={{ x: 0, y: 265 }}
      transition={{ duration: 1.3, ease: "easeOut" }}
      className="absolute left-0 w-[250px] sm:w-full flex justify-start z-[0]"
    >
      <Image
        src="/home/left-stone.png"
        height={1020}
        width={450}
        alt="left-stone"
        className="pointer-events-none select-none"
      />
    </motion.div>
  );
};

export const RightStone = () => {
  return (
    <motion.div
      initial={{ x: 400, y: 0 }}
      animate={{ x: 0, y: 200 }}
      transition={{ duration: 1.3, ease: "easeOut" }}
      className="absolute right-0 w-[250px] sm:w-full flex justify-end z-[0]"
    >
      <Image
        src="/home/right-stone.png"
        height={1020}
        width={450}
        alt="right-stone"
        className="pointer-events-none select-none"
      />
    </motion.div>
  );
};
