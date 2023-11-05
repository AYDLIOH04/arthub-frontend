"use client";

import sweetSoftLogo from "public/home/sweet-soft.svg";
import Image from "next/image";
import { BsDiscord, BsTelegram, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="font-damione py-2 px-5 text-white text-center w-full absolute bottom-[-18px] min-h-[200px] flex items-center">
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-1/4 flex justify-center items-center flex-col"
      >
        <h3 className="uppercase">Созданно командой</h3>
        <Image
          className="mt-3"
          src={sweetSoftLogo}
          width={70}
          alt="Sweet Soft"
        />
      </motion.div>
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="w-1/2"
      >
        <h3 className="">ARTHUB</h3>
        <p className="py-3">Всё, что нужно - в одном месте</p>
      </motion.div>
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-1/4"
      >
        <h3 className="">Ссылки</h3>
        <ul className="mt-3 flex justify-center space-x-3 text-[28px]">
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
      </motion.div>
    </footer>
  );
}
