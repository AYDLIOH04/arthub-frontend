'use client'

import { motion } from "framer-motion";

export default function ExploreSection() {
  return (
    <section className="h-[950px] flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="font-title text-[50px] uppercase">Исследуйте</h2>
        <p className="font-paragraph text-center text-[30px] mt-5 w-[500px] font-[300] leading-8">
          мир цифрового искусства с нами. Осваивайте новые программы и кисти,
          чтобы совершенствовать свои работы
        </p>
      </motion.div>
    </section>
  );
}
