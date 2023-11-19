"use client";

import { motion } from "framer-motion";

const LearnSection = () => {
  return (
    <section className="sm:h-[100vh] h-[800px] flex justify-center items-center text-center z-10">
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex justify-center items-center flex-col h-[500px] z-[10]"
      >
        <h2 className="font-title text-[25px] md:text-[50px] uppercase">
          Обучайтесь
        </h2>
        <p className="font-paragraph text-center text-[20px] md:text-[30px] mt-5 sm:w-[500px] w-[300px] font-[300] leading-8 px-3">
          рисованию, благодаря нашей подборке гайдов и туториалов
        </p>
      </motion.div>
    </section>
  );
};

export default LearnSection;
