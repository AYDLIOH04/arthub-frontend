"use client";

import sweetSoftLogo from "public/home/sweet-soft.svg";
import Image from "next/image";
import { BsDiscord, BsTelegram, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="font-damione px-5 py-2 text-white text-center w-full h-[250px] flex justify-center items-center text-[10px] md:text-[18px]">
      <div className="flex justify-center items-center max-h-[150px] w-full">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{once: true}}
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
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{once: true}}
          className="w-1/2"
        >
          <h3 className="uppercase text-[16px] md:text-[20px]">ARTHUB</h3>
          <p className="py-3">Всё, что нужно - в одном месте</p>
        </motion.div>
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{once: true}}
          className="w-1/4"
        >
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
        </motion.div>
      </div>
    </footer>
  );
}
