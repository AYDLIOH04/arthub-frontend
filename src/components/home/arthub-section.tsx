"use client";

import { motion } from "framer-motion";

export default function ArthubSection() {
  return (
    <section className="flex justify-center items-center h-[100vh]">
      <div className="flex justify-center items-center flex-col h-[500px]">
        <motion.h1
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut"}}
          className="text-center font-title uppercase text-[50px] md:text-[102px]"
        >
          Arthub
        </motion.h1>
        <motion.p
          initial={{ y: 400, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut"}}
          className="font-paragraph text-center text-[20px] md:text-[30px] md:w-[600px] font-[300] leading-8 px-3"
        >
          Уникальное собрание инструментов и информации для начинающих и опытных
          DIGITAL-художников
        </motion.p>
      </div>
    </section>
  );
}
