"use client";

import { motion } from "framer-motion";

export default function LearnSection() {
  return (
    <section className="h-[100vh] flex justify-center items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex justify-center items-center flex-col h-[500px] z-10"
      >
        <h2 className="font-title text-[25px] md:text-[50px] uppercase">
          Обучайтесь
        </h2>
        <p className="font-paragraph text-center text-[20px] md:text-[30px] mt-5 md:w-[500px] font-[300] leading-8 px-3">
          рисованию, благодаря нашей подборке гайдов и туториалов
        </p>
      </motion.div>
    </section>
  );
}
