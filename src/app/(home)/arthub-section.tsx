"use client";

import { motion } from "framer-motion";
import Stalactites from "@/app/(home)/stalactites";
import { LeftStone, RightStone } from "./stones";

const ArthubSection = () => {
  return (
    <>
      <div className="relative z-0">
        <Stalactites />
      </div>
      <section className="sm:h-[100vh] h-[800px] flex justify-center items-center z-10 relative">
        <LeftStone />
        <RightStone />
        <div className="flex justify-center items-center flex-col h-[500px] z-10">
          <motion.h1
            initial={{ y: -200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center font-title uppercase text-[50px] md:text-[102px]"
          >
            Arthub
          </motion.h1>
          <motion.p
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-paragraph text-center text-[20px] md:text-[30px] md:w-[650px] font-[300] leading-8 px-3"
          >
            Уникальное собрание инструментов и информации для начинающих и
            опытных DIGITAL-художников
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default ArthubSection;
