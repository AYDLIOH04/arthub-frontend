"use client";

import { motion } from "framer-motion";

export default function InspireSection() {
  return (
    <section className="sm:h-[100vh] h-[800px] flex justify-center items-center text-center sm:pt-[140px] pt-[400px] mb-[120px] sm:mb-[50px]">
      <div className="flex justify-center items-center flex-col h-[500px] gl:pt-0 z-0">
        <motion.h2
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="font-title text-[25px] md:text-[50px] uppercase"
        >
          Вдохновляйтесь
        </motion.h2>
        <motion.p
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="font-paragraph text-center text-[20px] md:text-[30px] mt-5 sm:w-[420px] w-[270px] mx-auto font-[300] leading-8"
        >
          нашей коллекцией изображений или используйте их в качестве референсов
          для ваших работ
        </motion.p>
      </div>
    </section>
  );
}
