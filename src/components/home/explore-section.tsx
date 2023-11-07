'use client'

import { motion } from "framer-motion";
import Programs from "./programs";

export default function ExploreSection() {
  return (
    <section className="h-[100vh] flex flex-col justify-center items-center text-center mb-[150px]">
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.3, ease: "easeOut"}}
        viewport={{ once: true }}
        className="flex justify-center items-center flex-col h-[500px] z-10"
      >
        <h2 className="font-title text-[25px] md:text-[50px] uppercase">Исследуйте</h2>
        <p className="font-paragraph text-center text-[20px] md:text-[30px] mt-5 md:w-[500px] font-[300] leading-8 px-3">
          мир цифрового искусства с нами. Осваивайте новые программы и кисти,
          чтобы совершенствовать свои работы
        </p>
        <Programs/>
      </motion.div>
    </section>
  );
}
