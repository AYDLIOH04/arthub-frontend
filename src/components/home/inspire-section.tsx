"use client";

import { motion } from "framer-motion";

export default function InspireSection() {
  return (
    <section className="h-[1100px] flex flex-col justify-center items-center">
      <motion.h2
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="font-title text-[50px] uppercase"
      >
        Вдохновляйтесь
      </motion.h2>
      <motion.p
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="font-paragraph text-center text-[30px] mt-5 w-[420px] mx-auto font-[300] leading-8"
      >
        нашей коллекцией изображений или используйте их в качестве референсов
        для ваших работ
      </motion.p>
    </section>
  );
}
