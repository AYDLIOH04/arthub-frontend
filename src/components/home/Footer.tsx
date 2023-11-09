"use client";

import sweetSoftLogo from "public/home/sweet-soft.svg";
import Image from "next/image";
import { BsDiscord, BsTelegram, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="font-damione px-2 py-2 text-white text-center w-full text-[10px] md:text-[18px]">
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex justify-center items-start sm:items-center max-h-[150px] sm:min-h-[200px] w-full z-10 bg-background sm:bg-inherit px-4 py-2 rounded-[12px]"
      >
        <div className="w-1/4 flex justify-center items-center flex-col">
          <h3 className="uppercase">Созданно командой</h3>
          <Image
            className="mt-3 sm:w-[120px] w-[70px]"
            src={sweetSoftLogo}
            width={70}
            alt="Sweet Soft"
          />
        </div>
        <div className="w-1/2 self-center">
          <h3 className="uppercase text-[16px] md:text-[20px]">ARTHUB</h3>
          <p className="py-3">Всё, что нужно - в одном месте</p>
        </div>
        <div className="w-1/4">
          <h3>Ссылки</h3>
          <ul className="mt-3 flex justify-center space-x-3 text-[20px] md:text-[28px]">
            <li className="hover:text-hover linear duration-200">
              <BsDiscord />
            </li>
            <li className="hover:text-hover linear duration-200">
              <BsTelegram />
            </li>
            <li className="hover:text-hover linear duration-200">
              <BsGithub />
            </li>
          </ul>
        </div>
      </motion.div>
    </footer>
  );
}
