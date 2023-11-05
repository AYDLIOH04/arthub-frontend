"use client";

import { motion } from "framer-motion";

export default function LearnSection() {
  return (
    <section className="h-[450px] flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="font-title text-[50px] uppercase">Обучайтесь</h2>
        <p className="font-paragraph text-center text-[30px] mt-5 w-[500px] font-[300] leading-8">
          рисованию, благодаря нашей подборке гайдов и туториалов
        </p>
      </motion.div>
    </section>
  );
}
